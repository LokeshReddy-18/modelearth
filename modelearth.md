# ModelEarth

A location-enabled install of [Anything LLM](https://anythingllm.com) which runs on [http://localhost:3001](http://localhost:3001).

First start a virtual environment with Claude Code CLI in the modelearth folder.

MacOS

	python3 -m venv env
	source env/bin/activate
	npx @anthropic-ai/claude-code

WindowsOS (You can also try without .bat added at end)

	python -m venv env
	env\Scripts\activate.bat
	npx @anthropic-ai/claude-code


Have Claude refresh our submodules. Here's an overview of [modelearth submodules](codechat/).

	Update submodules


### Site Install
<div style="float:right"><a href="#tab=baremetal">Run without Claude</a></div>
In Claude CLI run once:

	server setup

Restart the server quickly, in a couple seconds:

	restart

View at [localhost:3001](http://localhost:3001)


**Infrequently...**
We're aiming to avoid making changes in the Anything-llm parent repo code. [We rollback to sync](https://github.com/ModelEarth/modelearth/blob/master/sync.md).
If small changes are needed, apply them using the Insert and Remove process within claude.md, then run:

	reload claude.md, build, deploy

