## ModelEarth workflow

### 1. [First fork the modelearth webroot with Anything LLM](https://github.com/modelearth/modelearth/)
Then clone your fork, turn on GitHub Pages for review, and with the green button download via [Github Desktop](https://github.com/apps/desktop).  

Right-click your modelearth folder and start a virtual environment with [Claude Code CLI](https://www.anthropic.com/engineering/claude-code-best-practices) by running:

### 2. Start a server on port 3001 in the modelearth webroot

MacOS

	python3 -m venv env
	source env/bin/activate
	python -m http.server 3001

WindowsOS

	python -m venv env
	env\Scripts\activate.bat
	python -m http.server 3001

### 3. View site overview

Visit [http://localhost:3001](http://localhost:3001/) and [http://localhost:3001/codechat](http://localhost:3001/codechat)

### 4. Launch Claude Code CLI

Right-click and start a fresh terminal in the modelearth folder.  
You'll need [NodeJS 18+](https://nodejs.org/en/download). Type `node -v` to check.

If you haven't installed Claude yet, the following will direct you to the Claude website. 
Register for a $20/month subscription.

MacOS

	python3 -m venv env
	source env/bin/activate
	npx @anthropic-ai/claude-code

WindowsOS (You can also try without .bat added at end)

	python -m venv env
	env\Scripts\activate.bat
	npx @anthropic-ai/claude-code


### 5. Update submodules

Have Claude refresh our submodules hourly. Here's an overview of [modelearth submodules](codechat/).

	update submodules


### 6. Anything LLM Activation

ModelEarth is a location-enabled install of [Anything LLM](https://anythingllm.com) which runs on [http://localhost:3001](http://localhost:3001).

<div style="float:right"><a href="#tab=baremetal">Run without Claude</a></div>
In Claude CLI run once. This runs [setup.md](https://github.com/ModelEarth/modelearth/blob/master/setup.md).

	server setup

Restart the server quickly, in a couple seconds:

	restart

View at [localhost:3001](http://localhost:3001)


**Infrequently...**
We're aiming to avoid making changes in the Anything-llm parent repo code. [We rollback to sync](https://github.com/ModelEarth/modelearth/blob/master/sync.md).
If small changes are needed, apply them using the Insert and Remove process within claude.md, then run:

	reload claude.md, build, deploy

### 6. Now choose a project that you'd like to contribute to

Associate your Github to an existing issue or post a new issue describing the project.  
Include a link to a Google Doc if you'd like others to help edit project specs.

[http://localhost:3001/projects](http://localhost:3001/projects) 

