var PMBok = 
    {
    "processes": [
                    {
                        name: "Develop Project Charter",
                        code: "4.1",
                        inputs: [
                            {name:'Project Statement of Work'},
                            {name:'Business case'},
                            {name:'Contract (= 5.Agreements)'},
                            {name:'Enterprise environmental factors'},
                            {name:'Organizational process assets'}
                        ],
                        tools: [
                            {name:'Expert judgement'}
                        ],
                        outputs: [
                            {name:'Project charter'}
                        ]
                    },
        {
            name: "Develop Project Management Plan",
            code: "4.2",
            inputs: [
                {name:'Project charter'},
                {name:'Outputs from other processes'},
                {name:'Enterprise environmental factors'},
                {name:'Organizational process assets'}
            ],
            tools: [
                {name:'Expert judgement'}
            ],
            outputs: [
                {name:'Project management plan'}
            ]
        },

        {
            name: "Direct and Manage Project work",
            code: "4.3",
            inputs: [
                {name:'Project management plan'},
                {name:'Approved change requests'},
                {name:'Enterprise environmental factors'},
                {name:'Organizational process assets'}
            ],
            tools: [
                {name:'Expert judgement'},
                {name:'Project management informational system'},
                {name:'Meetings'}
            ],
            outputs: [
                {name:'Deliverables'},
                {name:'Work performance information (=5.data)'},
                {name:'Change requests'},
                {name:'Project management plan updates'},
                {name:'Project documents updates'}
            ]
        },

        {
            name: "Monitor and Control Project Work",
            code: "4.4",
            inputs: [
                {name:'Project management plan'},
                {name:'Work performance information (=5:+Sch/cost frcsts, validated changes'},
                {name:'Enterprise environmental factors'},
                {name:'Organizational process assets'}
            ],
            tools: [
                {name:'Expert judgement'}
            ],
            outputs: [
                {name:'Change requests'},
                {name:'Project management plan updates'},
                {name:'Project documents updates'}
            ]
        },

        {
            name: "Perform Integrated Change Control",
            code: "4.5",
            inputs: [
                {name:'Project management plan'},
                {name:'Work performance information (=5.reports)'},
                {name:'Change requests'},
                {name:'Enterprise environmental factors'},
                {name:'Organizational process assets'}
            ],
            tools: [
                {name:'Expert judgement'},
                {name:'Change control meetings'},
                {name:'Change control tools'}
            ],
            outputs: [
                {name:'Change request status updates (= 5. Approved change requests + Change log'},
                {name:'Project management plan updates'},
                {name:'Project documents updates'}
            ]
        },

        {
            name: "Close project or phase",
            code: "4.6",
            inputs: [
                {name:'Project management plan'},
                {name:'Accepted deliverables'},
                {name:'Organizational process assets'}
            ],
            tools: [
                {name:'Expert judgement'}
            ],
            outputs: [
                {name:'Final product, service, or result transition'},
                {name:'Organizational process assets updates'}
            ]
        },




        {
            name: "Plan Scope Management",
            code: "5.1",
            inputs: [
                {name:'Project management plan'},
                {name:'Project charter'},
                {name:'Enterprise environmental factors'},
                {name:'Organizational process assets'}
            ],
            tools: [
                {name:'Expert judgement'},
                {name:'Meetings'}
            ],
            outputs: [
                {name:'Scope management plan'},
                {name:'Requirements management plan'}
            ]
        },

        {
            name: "Collect Requirements",
            code: "5.1 (=5.2)",
            inputs: [
                {name:'Project charter'},
                {name:'Stakeholder register'}
            ],
            tools: [
                {name:'Interviews'},
                {name:'Focus groups'},
                {name:'Facilitated workshops'},
                {name:'Group creativity techniques'},
                {name:'Group decision making techniques'},
                {name:'Questionaries and surveys'},
                {name:'Observations'},
                {name:'Prototypes'}
            ],
            outputs: [
                {name:'Requirements documentation'},
                {name:'Requirements management plan'},
                {name:'Requirements traceability matrix'}
            ]
        },


        {
            name: "Define Scope",
            code: "5.2 (=5.3)",
            inputs: [
                {name:'Project charter'},
                {name:'Requirements documentation'},
                {name:'Organizational process assets'}
            ],
            tools: [
                {name:'Expert judgement'},
                {name:'Product analysis'},
                {name:'Alternatives generation'},
                {name:'Facilitated workshops'}
            ],
            outputs: [
                {name:'Project scope statement'},
                {name:'Project documents updates'}
            ]
        },


        {
            name: "Create WBS",
            code: "5.3 (=5.4)",
            inputs: [
                {name:'Project scope statement'},
                {name:'Requirements documentation'},
                {name:'Organizational process assets'}
            ],
            tools: [
                {name:'Decomposition'}
            ],
            outputs: [
                {name:'WBS'},
                {name:'WBS dictionary'},
                {name:'Scope baseline'},
                {name:'Project documents updates'}
            ]
        },

        {
            name: "Verify scope (=5.Validate)",
            code: "5.4 (=5.5)",
            inputs: [
                {name:'Project management plan'},
                {name:'Requirements documentation'},
                {name:'Requirements traceability matrix'},
                {name:'Validated deliverables'}
            ],
            tools: [
                {name:'Inspection'}
            ],
            outputs: [
                {name:'Accepted deliverables'},
                {name:'Change requests'},
                {name:'Project documents updates'}
            ]
        },


        {
            name: "Control scope",
            code: "5.5 (=5.6)",
            inputs: [
                {name:'Project management plan'},
                {name:'Requirements documentation'},
                {name:'Requirements traceability matrix'},
                {name:'Work performance information (=5.data)'},
                {name:'Organizational process assets'}
            ],
            tools: [
                {name:'Variance analysis'}
            ],
            outputs: [
                {name:'Work performance measurements (5.=information)'},
                {name:'Change requests'},
                {name:'Project management plan updates'},
                {name:'Project documents updates'},
                {name:'Organizational process assets updates'}
            ]
        },


/*

        {
            name: "Plan Schedule Management",
            code: "6.1",
            inputs: [
                {name:'Project management plan'},
                {name:'Project charter'},
                {name:'Enterprise environmental factors'},
                {name:'Organizational process assets'}
            ],
            tools: [
                {name:'Expert judgement'},
                {name:'Analytical techniques'},
                {name:'Meetings'}
            ],
            outputs: [
                {name:'Schedule management plan'}
            ]
        },
*/
        {
            name: "Define Activities",
            code: "6.1 (=6.2)",
            inputs: [
                {name:'Scope baseline'},
                {name:'Enterprise environmental factors'},
                {name:'Organizational process assets'}
            ],
            tools: [
                {name:'Decomposition'},
                {name:'Rolling wave planning'},
                {name:'Templates'},
                {name:'Expert judgement'}
            ],
            outputs: [
                {name:'Activity list'},
                {name:'Activity attributes'},
                {name:'Milestone list'}
            ]
        },

        {
            name: "Sequence Activities",
            code: "6.2 (=6.3)",
            inputs: [
                {name:'Activity list'},
                {name:'Activity attributes'},
                {name:'Milestone list'},
                {name:'Project scope statement'},
                {name:'Organizational process assets'}
            ],
            tools: [
                {name:'Precedence diagramming method(PDM)'},
                {name:'Dependency determination'},
                {name:'Applying leads and lags'},
                {name:'Schedule network templates'}
            ],
            outputs: [
                {name:'Project schedule network diagrams'},
                {name:'Project documents updates'}
            ]
        },

        {
            name: "Estimate Activity Resources",
            code: "6.3 (=6.4)",
            inputs: [
                {name:'Activity list'},
                {name:'Activity attributes'},
                {name:'Resource calendars'},
                {name:'Enterprise environmental factors'},
                {name:'Organizational process assets'}
            ],
            tools: [
                {name:'Expert judgement'},
                {name:'Alternative analysis'},
                {name:'Published estimating data'},
                {name:'Bottom-up estimating'},
                {name:'Project management software'}
            ],
            outputs: [
                {name:'Activity resource requirements'},
                {name:'Resource breakdown structure'},
                {name:'Project documents updates'}
            ]
        },

        {
            name: "Estimate Activity Durations",
            code: "6.4(=6.5)",
            inputs: [
                {name:'Activity list'},
                {name:'Activity attributes'},
                {name:'Activity resource requirements'},
                {name:'Resource calendars'},
                {name:'Project scope statement'},
                {name:'Enterprise environmental factors'},
                {name:'Organizational process assets'}
            ],
            tools: [
                {name:'Expert judgement'},
                {name:'Analogous estimating'},
                {name:'Parametric estimating'},
                {name:'Three-point estimating'},
                {name:'Delphi technique'},
                {name:'Reserve analysis'}
            ],
            outputs: [
                {name:'Activity duration estimates'},
                {name:'Project documents updates'}
            ]
        },

        {
            name: "Develop schedule",
            code: "6.5(=6.6)",
            inputs: [
                {name:'Activity list'},
                {name:'Activity attributes'},
                {name:'Project schedule network diagrams'},
                {name:'Activity resource requirements'},
                {name:'Resource calendars'},
                {name:'Activity duration estimates'},
                {name:'Project scope statement'},
                {name:'Enterprise environmental factors'},
                {name:'Organizational process assets'}
            ],
            tools: [
                {name:'Schedule network analysis'},
                {name:'Critical path method'},
                {name:'Critical chain method'},
                {name:'Resource optimization techniques (5=leveling)'},
                {name:'What-if scenario analysis'},
                {name:'Applying leads and lags'},
                {name:'Schedule compression'},
                {name:'Scheduling tool'}
            ],
            outputs: [
                {name:'Schedule baseline'},
                {name:'Project schedule'},
                {name:'Schedule data'},
                {name:'Project documents updates'}
            ]
        },


      {
            name: "Control Schedule",
            code: "6.6 (=6.7)",
            inputs: [
                {name:'Project management plan'},
                {name:'Project schedule'},
                {name:'Work performance information (5.=data)'},
                {name:'Organizational process assets'}
            ],
            tools: [
                {name:'Performance reviews'},
                {name:'Variance analysis'},
                {name:'Project management software'},
                {name:'Resource leveling (5=optimization techniques)'},
                {name:'What-if scenario analysis'},
                {name:'Adjusting leads and lags'},
                {name:'Schedule compression'},
                {name:'Scheduling tool'}
            ],
            outputs: [
                {name:'Work performance measurements (5=information)'},
                {name:'Change requests'},
                {name:'Project management plan updates'},
                {name:'Project documents updates'},
                {name:'Organizational processs assets updates'}
            ]
        },

/*
        {
            name: "Plan Cost Management",
            code: "7.1",
            inputs: [
                {name:'Project management plan'},
                {name:'Project charter'},
                {name:'Enterprise environmental factors'},
                {name:'Organizational process assets'}
            ],
            tools: [
                {name:'Experts judgement'},
                {name:'Analytical techniques'},
                {name:'Meetings'}
            ],
            outputs: [
                {name:'Cost management plan'}
            ]
        },
*/
        {
            name: "Estimate Costs",
            code: "7.1 (=7.2)",
            inputs: [
                {name:'Human resource plan'},
                {name:'Scope baseline'},
                {name:'Project schedule'},
                {name:'Risk register'},
                {name:'Enterprise environmental factors'},
                {name:'Organizational process assets'}
            ],
            tools: [
                {name:'Expert judgement'},
                {name:'Analogous estimating'},
                {name:'Parametric estimating'},
                {name:'Bottom-up estimating'},
                {name:'Three-point estimating'},
                {name:'Reserve analysis'},
                {name:'Cost of quality'},
                {name:'Project management estimating software'},
                {name:'Vendor bid analysis'}
            ],
            outputs: [
                {name:'Activity cost estimates'},
                {name:'Basis of estimates'},
                {name:'Project documents updates'}
            ]
        },


        {
            name: "Determine budget",
            code: "7.2 (=7.3)",
            inputs: [
                {name:'Scope baseline'},
                {name:'Activity costs estimates'},
                {name:'Basis of estimates'},
                {name:'Project schedule'},
                {name:'Resource calendars'},
                {name:'Contracts (5.=Agreements)'},
                {name:'Organizational process assets'}
            ],
            tools: [
                {name:'Cost aggregation'},
                {name:'Reserve analysis'},
                {name:'Expert judgement'},
                {name:'Historical relationships'},
                {name:'Funding limit reconcilation'}
            ],
            outputs: [
                {name:'Cost performance baseline (5=w/o performance)'},
                {name:'Project funding requirements'},
                {name:'Project documents updates'}
            ]
        },


        {
            name: "Control costs",
            code: "7.3 (=7.4)",
            inputs: [
                {name:'Project management plan'},
                {name:'Project funding requirements'},
                {name:'Work performance information (5=data)'},
                {name:'Organizational process assets'}
            ],
            tools: [
                {name:'Earned value management'},
                {name:'Forecasting'},
                {name:'To-complete performance index(TCPI)'},
                {name:'Performance reviews'},
                {name:'Project management software'}
            ],
            outputs: [
                {name:'Work performance measurements (5=information)'},
                {name:'Budget forecasts (5=Cost)'},
                {name:'Change requests'},
                {name:'Project management plan updates'},
                {name:'Project documents updates'}
            ]
        },

        {
            name: "Plan Quality Management",
            code: "8.1",
            inputs: [
                {name:'Scope baseline'},
                {name:'Stakeholder register'},
                {name:'Cost performance baseline'},
                {name:'Schedule baseline'},
                {name:'Risk register'},
                {name:'Enterprise environmental factors'},
                {name:'Organizational process assets'}
            ],
            tools: [
                {name:'Cost benefit analysis'},
                {name:'Cost of quality'},
                {name:'Seven basic quality tools'},
                {name:'Benchmarking'},
                {name:'Design of experiments'},
                {name:'Statistical sampling'},
                {name:'Additional quality planning tools'},
                {name:'Meetings'}
            ],
            outputs: [
                {name:'Quality management plan'},
                {name:'Process improvement plan'},
                {name:'Quality metrics'},
                {name:'Quality checklists'},
                {name:'Project documents updates'}
            ]
        },


        {
            name: "Perform quality assurance",
            code: "8.2",
            inputs: [
                {name:'Project management plan (5=Quality)'},
                {name:'Quality metrics'},
                {name:'Work performance information (5= Project documents)'},
                {name:'Quality control measurements'}
            ],
            tools: [
                {name:'Plan Quality and Perform Quality Control (5=Quality management and control tools)я'},
                {name:'Quality audits'},
                {name:'Process analysis'}
            ],
            outputs: [
                {name:'Change requests'},
                {name:'Project management plan updates'},
                {name:'Project documents updates'},
                {name:'Organizational process assets updates'}
            ]
        },

        {
            name: "Perform Quality Control (5=Control quality)",
            code: "8.3",
            inputs: [
                {name:'Project management plan (5=Quality)'},
                {name:'Quality metrics'},
                {name:'Quality checklists'},
                {name:'Work performance measurements (5=data)'},
                {name:'Approved change requests'},
                {name:'Deliverables'},
                {name:'Organizational process assets'}
            ],
            tools: [
                {name:'Seven basic quality tools'},
                {name:'Statistical sampling'},
                {name:'Inspection'},
                {name:'Approved change requests review'}
            ],
            outputs: [
                {name:'Quality control measurements'},
                {name:'Validated changes'},
                {name:'Validated deliverables'},
                {name:'Change requests'},
                {name:'Project management plan updates'},
                {name:'Project documents updates'},
                {name:'Organizational process assets updates'}
            ]
        },
        {
            name: "Plan human resource Management",
            code: "9.1",
            inputs: [
                {name:'Project management plan'},
                {name:'Activity resource requirements'},
                {name:'Enterprise environmental factors'},
                {name:'Organizational process assets'}
            ],
            tools: [
                {name:'Organizational charts and position descriptions'},
                {name:'Networking'},
                {name:'Organizational theory'},
                {name:'Experts judgement'},
                {name:'Meetings'}
            ],
            outputs: [
                {name:'Human resource plan'}
            ]
        },


  {
            name: "Acquire project team",
            code: "9.2",
            inputs: [
                {name:'Project management plan (5=Human resource)'},
                {name:'Enterprise environmental factors'},
                {name:'Organizational process assets'}
            ],
            tools: [
                {name:'Pre-assigment'},
                {name:'Negotiation'},
                {name:'Acquisuion'},
                {name:'Virtual teams'}
            ],
            outputs: [
                {name:'Project staff assigments'},
                {name:'Resource calendars'},
                {name:'Project management plan updates'}
            ]
        },

        {
            name: "Develop Project Team",
            code: "9.3",
            inputs: [
                {name:'Project management plan (5=Human resource)'},
                {name:'Project staff assignments'},
                {name:'Resource calendars'}
            ],
            tools: [
                {name:'Interpersonal skills'},
                {name:'Training'},
                {name:'Team-building activities'},
                {name:'Ground rules'},
                {name:'Co-location'},
                {name:'Recognition and rewards'}
            ],
            outputs: [
                {name:'Team performance assessments'},
                {name:'Enterprise environmental factors updates'}
            ]
        },


  {
            name: "Manage project team",
            code: "9.4",
            inputs: [
                {name:'Project management plan (5=Human resource)'},
                {name:'Project staff assigments'},
                {name:'Team performance assesments'},
                {name:'Work performance reports'},
                {name:'Organizational process assets'}
            ],
            tools: [
                {name:'Observation and conversation'},
                {name:'Project performance appraisals'},
                {name:'Conflict management'},
                {name:'Issue log (in 5-input!)'},
                {name:'Interpersonal skills'}
            ],
            outputs: [
                {name:'Change requests'},
                {name:'Project management plan updates'},
                {name:'Enterprise environmental factors updates'},
                {name:'Organizational process assets updates'}
            ]
        },


        {
            name: "10.1 Identify Stakeholders",
            code: "10.1 (=13.1)",
            inputs: [
                {name:'Project charter'},
                {name:'Procurement documents'},
                {name:'Enterprise environmental factors'},
                {name:'Organizational process assets'}
            ],
            tools: [
                {name:'Stakeholder analysis'},
                {name:'Expert judgement'}
            ],
            outputs: [
                {name:'Stakeholder register'},
                {name:'Stakeholder management strategy'}
            ]
        },


        {
            name: "Plan Communications Management",
            code: "10.2 (=10.1)",
            inputs: [
                {name:'Stakeholder registry (5: -, + Pr.man.plan)'},
                {name:'Stakeholder management strategy (5: -)'},
                {name:'Enterprise environmental factors'},
                {name:'Organizational process assets'}
            ],
            tools: [
                {name:'Communication requirements analysis'},
                {name:'Communication technology'},
                {name:'Communication models'},
                {name:'Communication methods'}
            ],
            outputs: [
                {name:'Communications management plan'},
                {name:'Project documents updates'}
            ]
        },

        /*

        {
            name: "Manage communications",
            code: "10.2",
            inputs: [
                {name:'Communications management plan'},
                {name:'Work performance reports'},
                {name:'Enterprise environmental factors'},
                {name:'Organizational process assets'}
            ],
            tools: [
                {name:'Communication technology'},
                {name:'Communication models'},
                {name:'Communication methods'},
                {name:'Information management systems'},
                {name:'Performance reporting'}
            ],
            outputs: [
                {name:'Project communications'},
                {name:'Project management plan updates'},
                {name:'Project documents updates'},
                {name:'Organizational process assets updates'}
            ]
        },
*/

        {
            name: "Distribute information",
            code: "10.3",
            inputs: [
                {name:'Project management plan'},
                {name:'Work performance reports'},
                {name:'Organizational process assets'}
            ],
            tools: [
                {name:'Communication methods'},
                {name:'Information distribution tools'}

            ],
            outputs: [
                {name:'Organizational process assets updates'}
            ]
        },


        {
            name: "Manage Stakeholder Expectation (5=Engagement)",
            code: "10.4 (=13.3)",
            inputs: [
                {name:'Stakeholder register'},
                {name:'Stakeholder management strategy (5=plan)'},
                {name:'Project management plan (5=Communications)'},
                {name:'Issue log (5=mvd to outputs!)'},
                {name:'Change log'},
                {name:'Organizational process assets'}
            ],
            tools: [
                {name:'Communication methods'},
                {name:'Interpersonal skills'},
                {name:'Management skills'}
            ],
            outputs: [
                {name:'Change requests'},
                {name:'Project management plan updates'},
                {name:'Project documents updates'},
                {name:'Organizational process assets updates'}
            ]
        },



        {
            name: "Report Performance (=Control Communications)",
            code: "10.5 (=10.3)",
            inputs: [
                {name:'Project management plan'},
                {name:'Project communications'},
                {name:'Issue log'},
                {name:'Work performance data'},
                {name:'Organizational process assets'}
            ],
            tools: [
                {name:'Reporting systems'},
                {name:'Expert judgement'},
                {name:'Meetings'}
            ],
            outputs: [
                {name:'Work performance information'},
                {name:'Change requests'},
                {name:'Project documents updates'},
                {name:'Organizational process assets updates'}
            ]
        },


        {
            name: "Plan Risk Management (5th)",
            code: "11.1",
            inputs: [
                {name:'Project management plan'},
                {name:'Project charter'},
                {name:'Stakeholder register'},
                {name:'Enterprise environmental factors'},
                {name:'Organizational process assets'}
            ],
            tools: [
                {name:'Analytical techniques'},
                {name:'Expert judgement'},
                {name:'Meetings'}
            ],
            outputs: [
                {name:'Risk management plan'}
            ]
        },



        {
            name: "Identify risks",
            code: "11.2",
            inputs: [
                {name:'Risk management plan'},
                {name:'Cost management plan'},
                {name:'Schedule management plan'},
                {name:'Quality management plan'},
                {name:'Human resource plan'},
                {name:'Scope baseline'},
                {name:'Activity costs estimates'},
                {name:'Activity duration estimates'},
                {name:'Stakeholder register'},
                {name:'Project documents'},
                {name:'Procurement documents'},
                {name:'Enterprise environmental factors'},
                {name:'Organizational process assets'}
            ],
            tools: [
                {name:'Documentation reviews'},
                {name:'Information gathering techniques'},
                {name:'Checklist analysis'},
                {name:'Assumption analysis'},
                {name:'Diagramming techniques'},
                {name:'SWOT analysis'},
                {name:'Expert judgement'}

            ],
            outputs: [
                {name:'Risk Register'}
            ]
        },

        {
            name: "Perform Qualitative Risk Analysis",
            code: "11.3",
            inputs: [
                {name:'Risk management plan'},
                {name:'Project scope statement (5=Scope baseline)'},
                {name:'Risk register'},
                //{name:'Enterprise environmental factors'},
                {name:'Organizational process assets'}
            ],
            tools: [
                {name:'Risk probability and impact assesment'},
                {name:'Probability and impact matrix'},
                {name:'Risk data quality assesment'},
                {name:'Risk categorization'},
                {name:'Risk urgenct assesment'},
                {name:'Expert judgement'}
            ],
            outputs: [
                {name:'Risk register updates (5-Project documents updates)'}
            ]
        },

        {
            name: "Perform Quantitative Risk Analysis",
            code: "11.4",
            inputs: [
                {name:'Risk management plan'},
                {name:'Cost management plan'},
                {name:'Schedule management plan'},
                {name:'Risk register'},
                {name:'Enterprise environmental factors'},
                {name:'Organizational process assets'}
            ],
            tools: [
                {name:'Data gathering and representation techniques'},
                {name:'Quantitative risk analysis and modeling techniques'},
                {name:'Expert judgement'}
            ],
            outputs: [
                {name:'Risk register updates (5=Project documents updates)'}
            ]
        },

        {
            name: "Plan Risk Responses",
            code: "11.5",
            inputs: [
                {name:'Risk management plan'},
                {name:'Risk register'}
            ],
            tools: [
                {name:'Strategies for negative risks or threats'},
                {name:'Strategies for positive risks or opportunities'},
                {name:'Contingent response strategies'},
                {name:'Expert judgement'}
            ],
            outputs: [
                {name:'Project management plan updates'},
                {name:'Project documents updates'}
            ]
        },

        {
            name: "Monitor and Control Risks",
            code: "11.6",
            inputs: [
                {name:'Project management plan'},
                {name:'Risk register'},
                {name:'Work performance information (5=data)'},
                {name:'Work performance reports'}
            ],
            tools: [
                {name:'Risk reassessment'},
                {name:'Risk audits'},
                {name:'Variances and trend analysis'},
                {name:'Technical performance measurement'},
                {name:'Reserve analysis'},
                {name:'Status meetings'}
            ],
            outputs: [
                {name:'Work performance information'},
                {name:'Change requests'},
                {name:'Project management plan updates'},
                {name:'Project documents updates'},
                {name:'Organizational process assets updates'}
            ]
        },


        {
            name: "Plan Procurement Management (5th)",
            code: "12.1",
            inputs: [
                {name:'Project management plan'},
                {name:'Requirements documentation'},
                {name:'Risk register'},
                {name:'Activity resource requirements'},
                {name:'Project schedule'},
                {name:'Activity cost estimates'},
                {name:'Stakeholder register'},
                {name:'Enterprise environmental factors'},
                {name:'Organizational process assets'}
            ],
            tools: [
                {name:'Make or buy analysis'},
                {name:'Expert judgement'},
                {name:'Market research'},
                {name:'Meetings'}
            ],
            outputs: [
                {name:'Procurement management plan'},
                {name:'Procurement statement of work'},
                {name:'Procurement documents'},
                {name:'Source selection criteria'},
                {name:'Make or buy decisions'},
                {name:'Change requests'},
                {name:'Project documents updates'}
            ]
        },

        {
            name: "Conduct Procurements (5th)",
            code: "12.2",
            inputs: [
                {name:'Procurement management plan'},
                {name:'Procurement documents'},
                {name:'Source selection criteria'},
                {name:'Sellers proposals'},
                {name:'Project documents'},
                {name:'Make or buy decisions'},
                {name:'Procurement statement of work'},
                {name:'Organizational process assets'}
            ],
            tools: [
                {name:'Bidder conference'},
                {name:'Proposal evaluation techniques'},
                {name:'Independent estimates'},
                {name:'Expert judgement'},
                {name:'Advertising'},
                {name:'Analytical techniques'},
                {name:'Procurement negotiations'}
            ],
            outputs: [
                {name:'Selected sellers'},
                {name:'Agreements'},
                {name:'Resource calendars'},
                {name:'Change requests'},
                {name:'Project management plan updates'},
                {name:'Project documents updates'}
            ]
        },

        {
            name: "Administer Procurements (5=Control)",
            code: "12.3",
            inputs: [
                {name:'Project management plan'},
                {name:'Procurement documents'},
                {name:'Contract (5=Agreements)'},
                {name:'Approved change requests'},
                {name:'Work performance reports'},
                {name:'Work performance data'}

            ],
            tools: [
                {name:'Contract change control system'},
                {name:'Procurement performance reviews'},
                {name:'Inspections and audits'},
                {name:'Performance reporting'},
                {name:'Payment systems'},
                {name:'Claims administration'},
                {name:'Records management system'}
            ],
            outputs: [
                {name:'Work performance information'},
                {name:'Change requests'},
                {name:'Project management plan updates'},
                {name:'Project documents updates'},
                {name:'Organizational process assets updates'}
            ]
        },


        {
            name: "Close Procurements",
            code: "12.4",
            inputs: [
                {name:'Project management plan'},
                {name:'Procurement documents'}
            ],
            tools: [
                {name:'Procurement audits'},
                {name:'Negotiated settlements'},
                {name:'Records management system'}
            ],
            outputs: [
                {name:'Closed procurements'},
                {name:'Organizational process assets updates'}
            ]
        },







        {
            name: "Identify Stakeholders",
            code: "13.1",
            inputs: [
                {name:'Project charter'},
                {name:'Procurement documents'},
                {name:'Enterprise environmental factors'},
                {name:'Organizational process assets'}
            ],
            tools: [
                {name:'Stakeholder analysis'},
                {name:'Expert judgement'},
                {name:'Meetings'}
            ],
            outputs: [
                {name:'Stakeholder register'}
            ]
        },
        {
            name: "Plan Stakeholders Management",
            code: "13.2",
            inputs: [
                {name:'Project management plan'},
                {name:'Stakeholder register'},
                {name:'Enterprise environmental factors'},
                {name:'Organizational process assets'}
            ],
            tools: [
                {name:'Expert judgement'},
                {name:'Meetings'},
                {name:'Analytical techniques'}
            ],
            outputs: [
                {name:'Stakeholder management plan'},
                {name:'Project documents updates'}
            ]
        },

        {
            name: "Manage Stakeholder Engagement",
            code: "13.3",
            inputs: [
                {name:'Stakeholder management plan'},
                {name:'Communications management plan'},
                {name:'Change log'},
                {name:'Organizational process assets'}
            ],
            tools: [
                {name:'Communication methods'},
                {name:'Interpersonal skills'},
                {name:'Management skills'}
            ],
            outputs: [
                {name:'Issue log'},
                {name:'Change requests'},
                {name:'Project management plan updates'},
                {name:'Project documents updates'},
                {name:'Organizational process assets updates'}
            ]
        },


        {
            name: "Control Stakeholder Engagement",
            code: "13.4",
            inputs: [
                {name:'Project management plan'},
                {name:'Issue log'},
                {name:'Work performance data'},
                {name:'Project documents'}
            ],
            tools: [
                {name:'Reporting systems'},
                {name:'Expert judgement'},
                {name:'Meetings'}
            ],
            outputs: [
                {name:'Work performance information'},
                {name:'Change requests'},
                {name:'Project documents updates'},
                {name:'Organizational process assets updates'}
            ]
        }




            ]
          }
