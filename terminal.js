class Terminal {
	constructor(terminalInput, terminalWindow){
		this.currentCommand = null;
		this.commandList = [];
		this.terminalInput = terminalInput;
		this.terminalWindow = terminalWindow;
	}

	get_input(){
		this.currentCommand = this.terminalInput.value;
		console.log(this.currentCommand);
	}
	print_command(){
		this.terminalWindow.value += this.currentCommand + "\n";
	}

}