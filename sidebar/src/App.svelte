<script >
  import { useForm, required } from "svelte-use-form";
  const form = useForm({
    deal: { validators: [required]}
  });
  let allDeals = [];
  let formEl;
  let mainEl;
  let dealGroupName = 'deal';
  let retrieveDealsLabel = "Retrieve Deals";
  let listDealsErrors = '';
  let lastHubSpotDealID = '';
  let companySaveName = '';
  let dealDetails;
  let isReadyToSave = false;
  const POC_FILE_NAME_PREFIX = "Akeyless Vault Platform - POC Plan - ";
  
  const getInputId = (inputValue) => {
    return `input_${inputValue}`;
  }

  const SLIDE_BUTTON_TYPE = Object.freeze({
    SUMMARY: Symbol("summary"),
    SESSION: Symbol("sessions"),
    WARNINGS: Symbol("warnings"),
    SESSION_TASKS: Symbol("sessionTasks"),
    SESSION_CIRCLES: Symbol("sessionCircles"),
    SESSION_DATES: Symbol("sessionDates"),
    SAVE: Symbol("save")
  });

  const onDealsListSuccess = (deals) => {
    // console.log('Starting onDealsListSuccess');
    allDeals = [];
    for (const [hubSpotDealID, deal] of Object.entries(deals)) {
        // console.log('hubSpotDealID', hubSpotDealID);
        deal.hubSpotDealID = hubSpotDealID;
        // console.log('deal', deal);
        allDeals.push(deal);
    }
    setCursor('default');
    // console.log('Exiting onDealsListSuccess');
  }

  const lookupDealsHandler = () => {
    // console.log('Starting lookupDealsHandler');
    allDeals = [];
    setCursor('wait');
    google.script.run
        .withFailureHandler(onDealsListFailure)
        .withSuccessHandler(onDealsListSuccess)
        .getDeals();
    // console.log('Ending lookupDealsHandler');
  }

  const onDealsListFailure = (error) => {
    setCursor('default');
    listDealsErrors = "ERROR: " + error.message;
  }

  const onSubmitDealSelection = (e) => {
    const formValues = $form.values;
    setCursor('wait');
    google.script.run
        .withSuccessHandler(onDealGetSuccess)
        .withFailureHandler(onDealGetFailure)
        .getDeal(formValues.deal);
  }

  const onDealGetSuccess = (deal) => {
    setCursor('default');
    dealDetails = deal;
    lastHubSpotDealID = dealDetails.hubSpotDealID;
    companySaveName = dealDetails.companyName;
    console.log('Deal Retrieved', dealDetails);
  }

  const onDealGetFailure = (error) => {
    setCursor('default');
    listDealsErrors = "ERROR: " + error.message;
  }

  const setCursor = (cursor) => {
    let x = mainEl.querySelectorAll("*");
    for (var i = 0; i < x.length; i++) {
        x[i].style.cursor = cursor;
    }
  }

//   const SLIDE_BUTTON_TYPE = Object.freeze({
//     SUMMARY: Symbol("summary"),
//     SESSION: Symbol("sessions"),
//     WARNINGS: Symbol("warnings"),
//     SESSION_TASKS: Symbol("sessionTasks"),
//     SESSION_CIRCLES: Symbol("sessionCircles"),
//     SESSION_DATES: Symbol("sessionDates"),
//     SAVE: Symbol("save")
//   });

//   ui.createMenu('POC Plan Automation')
//     .addItem('Duplicate Logo to other slides', 'copyLogoToAllSlides')
//     .addItem('Remove Existing Logos from all Slides', 'removeLogosFromSlides')
//     .addItem('Open POC Plan Generator', 'showSidebar')
//     .addItem('Create Summary Slide', 'prepSummarySlide')
//     .addItem('Create Session Slide', 'prepSessionSlide')
//     .addItem('Create Docs, Links and Considerations', 'repalceDocsLinksAndWarnings')
//     .addItem('Selection Illuminate', 'selectionIlluminate')
//     .addItem('Select Session Tasks', 'selectSessionTaskShapes')
//     .addItem('Select Session Circles', 'selectSessionCircleShapes')
//     .addItem('Select Session Dates', 'selectSessionDateShapes')
//     .addItem('Save copy of POC Plan', 'saveContentsToNewPresentation')
//     .addItem('Remove All Slides', 'removeAllSlides')
//     .addItem('Test', 'dialogTest')
//     .addToUi();

  const slideButtonHandler = (button) => {
    switch (button) {
        case SLIDE_BUTTON_TYPE.SUMMARY:
            google.script.run.prepSummarySlide(dealDetails);
            break;
        case SLIDE_BUTTON_TYPE.SESSION:
            google.script.run.prepSessionSlide(dealDetails);
            break;
        case SLIDE_BUTTON_TYPE.WARNINGS:
            google.script.run.replaceDocsLinksAndWarnings(dealDetails);
            break;
        case SLIDE_BUTTON_TYPE.SESSION_TASKS:
            google.script.run.selectSessionTaskShapes();
            break;
        case SLIDE_BUTTON_TYPE.SESSION_CIRCLES:
            google.script.run.selectSessionCircleShapes();
            break;
        case SLIDE_BUTTON_TYPE.SESSION_DATES:
            google.script.run.selectSessionDateShapes();
            break;
        case SLIDE_BUTTON_TYPE.SAVE:
            google.script.run.saveContentsToNewPresentation(dealDetails);
            break;
        
        default:
            break;
    }
  }
</script>

<main bind:this={mainEl}>
    <h2>Welcome to </h2>
    <h2>The Akeyless POC Plan Generator!</h2>
    <button on:click={lookupDealsHandler}>{retrieveDealsLabel}</button>
    <br/>
    <p>Current Deals:</p>
    <form use:form on:submit|preventDefault={onSubmitDealSelection} bind:this={formEl}>
        <fieldset id="deals">
            <legend>Select a deal:</legend>
                {#if allDeals.length == 0}
                    <div>
                        <p>Click "{retrieveDealsLabel}"</p>
                    </div>
                {:else}
                    {#each allDeals as deal}
                        <div>
                            <input 
                                id={getInputId(deal.hubSpotDealID)}
                                type=radio
                                bind:group={dealGroupName}
                                name='deal'
                                value={deal.hubSpotDealID}>
                            <label 
                                for={getInputId(deal.hubSpotDealID)}>{deal.companyName}</label>
                            <br/>
                        </div>
                    {/each}
                {/if}
        </fieldset>
        <br/>
        <button type="submit" disabled={!($form.deal?.touched && $form.valid)}>
            Retrieve details of selected deal
        </button>
    </form>
    <br/>
    <div id="output">
        {#if listDealsErrors?.length}
            <p>{listDealsErrors}</p>
        {/if}
    </div>
    {#if dealDetails?.hobSpotDealName}
    <fieldset>
        <legend>Deal:</legend>
        <div>
            <p>{dealDetails.hobSpotDealName}</p>
        </div>
    </fieldset>
    <!-- svelte-ignore missing-declaration -->
    <button on:click={slideButtonHandler(SLIDE_BUTTON_TYPE.SUMMARY)}>Create Summary Slide</button>
    <button >Create Session Slide</button>
    <button >Select Session Tasks</button>
    <button >Select Session Circles</button>
    <button >Select Session Dates</button>
    <button >Create Docs, Links and Considerations Slides</button>
    <button on:click={isReadyToSave = !isReadyToSave}>Ready to Save!</button>
    {#if isReadyToSave}
        <div>
            <input id="companySaveNameInput" type="text" bind:value={companySaveName}>
            <label for="companySaveNameInput">Company Name</label>
        </div>
        <button disabled={!isReadyToSave}>Save copy of POC Plan</button>
    {/if}
    
    {/if}
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <input type="button" value="Close" onclick="google.script.host.close()" />

</main>

<style>
    :global(.touched:invalid) {
        border-color: red;
        outline-color: red;
    }

    input {
        margin: .4rem;
    }

    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    fieldset {
        text-align: left;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
