  Function.prototype.bind = function(scope) {
     var _function = this;  
     return function() {
          return _function.apply(scope, arguments);
       }
  }



    var Model = function(){
        var self=this;

        this.data = PMBok.processes;

        this.process=ko.observable(        {
                    name: "Process name",
                    inputs: [
                        {name:'Process inputs listed here'}
                    ],
                    tools: [
                        {name:'tools'},
                        {name:'and'},
                        {name:'techniques'}
                    ],
                    outputs: [
                        {name:'outputs'}
                    ]
                }
              );
        this.processsource = ko.observable(0);

        this.seename    =ko.observable(true);
        this.seeinputs  =ko.observable(true);
        this.seetools   =ko.observable(true);
        this.seeoutputs =ko.observable(true);

        this.selectedProcess= ko.observable();
        this.selectedSource= ko.observable(0);
        this.isAnswerRight= ko.observable();

        this.getSelectedProcessName= function(){
                                  if (typeof(this.selectedProcess())!="undefined") {
                                     return this.selectedProcess().name;
                                  } else {
                                     return '';
                                  }
                                };

        this.getProcessSourceName =function() {
            switch (this.processsource()) {
                case 1: return 'INPUT';
                case 2: return 'TOOLS and TECHNIQUES';
                case 3: return 'OUTPUTS';
            }
            return '-';
        };

        this.startgame= function(){
           this.turn();
        };

        this.doCheck= function() {
           var result = true;
           if (this.selectedSource()!=this.processsource()) {
             result = false; 
           } 
           if (this.process().name != this.getSelectedProcessName()){
             result = false;
           }
           this.isAnswerRight(result);
           this.guessmode(0);           
           return result;
        };

        this.doHint= function() {
           this.seeinputs(true);
           this.seetools(true);
           this.seeoutputs(true);
         };

        this.selectSuggestedProcess = function(process){
            self.selectedProcess(process);
            location.href='#top'; 
        };

        this.turn= function(){
            var processcount = this.data.length;
            var process2check = Math.floor(Math.random()*(processcount-1))+1;
            var questiontype = Math.floor(Math.random()*3)+1;

            this.process(this.data[process2check]);
            this.processsource(questiontype);
            this.guessmode(questiontype);

        };

        this.guessmode= function(mode) {
            switch(mode) {
                case 0:
                    this.seename(true);
                    this.seeinputs(true);
                    this.seetools(true);
                    this.seeoutputs(true);
                    this.selectedSource(0);
                    this.selectedProcess(null); 
                    break;

                case 1:
                            this.seename(false);
                            this.seeinputs(true);
                            this.seetools(false);
                            this.seeoutputs(false);
                            break;

                case 2:
                            this.seename(false);
                            this.seeinputs(false);
                            this.seetools(true);
                            this.seeoutputs(false);
                            break;
                case 3:
                            this.seename(false);
                            this.seeinputs(false);
                            this.seetools(false);
                            this.seeoutputs(true);
               break;

            }  // /switch

        }; // /guessmode

        this.doFillSuggestedTextBox = function(processesarray,ev) {
          var clickElement = (typeof ev.target != 'undefined') ? ev.target : ev.srcElement; 
          var buzzword = clickElement.title;
          this.suggestedTextBox(buzzword);
          return false; 
        }

        this.suggestedTextBox =ko.observable('');
        this.suggestedProcesses=  ko.computed(function() {

            var texttosearch = this.suggestedTextBox().toLowerCase();
            return ko.utils.arrayFilter(this.data, function(process) {
                return (process.name.toLowerCase().indexOf(texttosearch) != -1);
            });
        }, this);


    }
   
    $(document).ready(function(){
        ko.applyBindings(new Model());
    });
