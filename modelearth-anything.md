
### 7. Anything LLM Activation (optional)

ModelEarth is a location-enabled install of [Anything LLM](https://anythingllm.com) which runs on [http://localhost:3001](http://localhost:3001).

<div style="float:right"><a href="#tab=baremetal">Run without Claude</a></div>
In Claude CLI run once. This runs [setup.md](https://github.com/ModelEarth/modelearth/blob/master/setup.md).

Skip this step if you've run previously. You'll already have Prisma and the database installed.

	server setup

Restart the server quickly, in a couple seconds:

	restart

View at [localhost:3001](http://localhost:3001)


**Infrequently...**
We're aiming to avoid making changes in the Anything-llm parent repo code. [We rollback to sync](https://github.com/ModelEarth/modelearth/blob/master/sync.md).
If small changes are needed, apply them using the Insert and Remove process within claude.md, then run:

	reload claude.md, build, deploy
