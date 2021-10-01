# EPlusTV

Current version: **0.9.0**

## About
This takes ESPN+ and transforms it into a "live TV" experience. It will discover what is on, create a schedule of channels and give you an m3u and xmltv file that you can import into things like Jellyfin, Emby, TVHeadend, NextPVR, Channels DVR, ect.

## Running
The recommended way of running is to pull the image from [Docker Hub](https://hub.docker.com/r/m0ngr31/eplustv).

### Docker Setup

#### Environement Variables
| Environment Variable | Description |
|---|---|
| ACCESS_URI | What accessable URL your clients will be connecting from. For example: `http://192.168.0.1:8000` |
| ESPN_USER | Your ESPN+ Username |
| ESPN_PASS | Your ESPN+ Password |


#### Volumes
| Volume Name | Description |
|---|---|
| /app/config | Used to store DB and application state. |
| /app/tmp | Used to store temporary segments generated by the streams. Recommended to use something like `/dev/shm`. |


#### Docker Run
By default, the easiest way to get running is:

```bash
docker run -p 8000:8000 -v /config_dir:/app/config -v /dev/shm:/app/tmp m0ngr31/eplustv
```