<script >
  import { useForm } from "svelte-use-form";
  import AutoComplete from "simple-svelte-autocomplete"
  const form = useForm();
  let allDeals = [];
  let formEl;
  let mainEl;
  let dealGroupName = 'deal';
  let retrieveDealsLabel = "Retrieve Deals";
  let listDealsErrors = '';
  let lastHubSpotDealID = '';
  let companySaveName = '';
  let dealDetails;
  let selectedDealObject;
  let selectedDealId;
  let isReadyToSave = false;

  const POC_FILE_NAME_PREFIX = "Akeyless Vault Platform - POC Plan - ";

  $: fullFileName = POC_FILE_NAME_PREFIX + companySaveName;
  
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

  const onSubmitDealSelection = () => {
    setCursor('wait');
    google.script.run
        .withSuccessHandler(onDealGetSuccess)
        .withFailureHandler(onDealGetFailure)
        .getDeal(selectedDealId);
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
    let x = document.querySelectorAll("*");
    for (var i = 0; i < x.length; i++) {
        x[i].style.cursor = cursor;
    }
  }

  const slideButtonSuccessHandler = (results) => {
    setCursor('default');
    if (results) {
        console.log('Results returned', results);
    } else {
        console.log('No Results returned from function');
    }
  }

  const slideButtonFailureHandler = (error) => {
    setCursor('default');
    listDealsErrors = "ERROR: " + error.message;
  }

  const slideButtonHandler = (button) => {
    setCursor('wait');
    switch (button) {
        case SLIDE_BUTTON_TYPE.SUMMARY:
            console.log('Summary button pressed');
            google.script.run
                .withSuccessHandler(slideButtonSuccessHandler)
                .withFailureHandler(slideButtonFailureHandler)
                .prepSummarySlide(dealDetails);
            break;
        case SLIDE_BUTTON_TYPE.SESSION:
            google.script.run
                .withSuccessHandler(slideButtonSuccessHandler)
                .withFailureHandler(slideButtonFailureHandler)
                .prepSessionSlide(dealDetails);
            break;
        case SLIDE_BUTTON_TYPE.WARNINGS:
            google.script.run
                .withSuccessHandler(slideButtonSuccessHandler)
                .withFailureHandler(slideButtonFailureHandler)
                .replaceDocsLinksAndWarnings(dealDetails);
            break;
        case SLIDE_BUTTON_TYPE.SESSION_TASKS:
            google.script.run
                .withSuccessHandler(slideButtonSuccessHandler)
                .withFailureHandler(slideButtonFailureHandler)
                .selectSessionTaskShapes();
            break;
        case SLIDE_BUTTON_TYPE.SESSION_CIRCLES:
            google.script.run
                .withSuccessHandler(slideButtonSuccessHandler)
                .withFailureHandler(slideButtonFailureHandler)
                .selectSessionCircleShapes();
            break;
        case SLIDE_BUTTON_TYPE.SESSION_DATES:
            google.script.run
                .withSuccessHandler(slideButtonSuccessHandler)
                .withFailureHandler(slideButtonFailureHandler)
                .selectSessionDateShapes();
            break;
        case SLIDE_BUTTON_TYPE.SAVE:
            console.log('Fulle File Name to Save : ', fullFileName);
            google.script.run
                .withSuccessHandler(slideButtonSuccessHandler)
                .withFailureHandler(slideButtonFailureHandler)
                .saveContentsToNewPresentation(fullFileName);
            break;
        
        default:
            console.log('Invalid button type sent');
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
                    <AutoComplete
                        items={allDeals}
                        name={dealGroupName}
                        bind:selectedItem={selectedDealObject}
                        bind:value={selectedDealId}
                        labelFieldName="companyName"
                        valueFieldName="hubSpotDealID"
                        keywordsFunction={deal => deal.companyName + ' ' + deal.hobSpotDealName} />
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
        <button on:click|trusted={()=>slideButtonHandler(SLIDE_BUTTON_TYPE.SUMMARY)}>Create Summary Slide</button>
        <button on:click|trusted={()=>slideButtonHandler(SLIDE_BUTTON_TYPE.SESSION)}>Create Session Slide</button>
        <button on:click|trusted={()=>slideButtonHandler(SLIDE_BUTTON_TYPE.SESSION_TASKS)}>Select Session Tasks</button>
        <button on:click|trusted={()=>slideButtonHandler(SLIDE_BUTTON_TYPE.SESSION_CIRCLES)}>Select Session Circles</button>
        <button on:click|trusted={()=>slideButtonHandler(SLIDE_BUTTON_TYPE.SESSION_DATES)}>Select Session Dates</button>
        <button on:click|trusted={()=>slideButtonHandler(SLIDE_BUTTON_TYPE.WARNINGS)}>Create Docs, Links and Considerations Slides</button>
        <button on:click|trusted={()=>isReadyToSave = !isReadyToSave}>Ready to Save!</button>
        {#if isReadyToSave}
            <div>
                <label for="companySaveNameInput">Company Name to save plan</label><br/>
                <input id="companySaveNameInput" type="text" bind:value={companySaveName}>
            </div>
            <button disabled={!isReadyToSave} on:click|trusted={()=>slideButtonHandler(SLIDE_BUTTON_TYPE.SAVE)}>Save copy of POC Plan</button>
        {/if}
    {/if}

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
