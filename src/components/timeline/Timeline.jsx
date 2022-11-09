import StyledTimeline from "./CSSTimeline";

function Timeline({ searchValue, ...props }) {
  console.log(props.playlists);
  const playlisNames = Object.keys(props.playlists);
  return (
    <StyledTimeline>
      {playlisNames.map((playlisName) => {
        const videos = props.playlists[playlisName];
        return (
          <section>
            <h2>{playlisName}</h2>
            <div>
              {videos
                .filter((video) => {
                  const titleNormalized = video.title.toLowerCase();
                  const searchValueNormalized = searchValue.toLowerCase();
                  return titleNormalized.includes(searchValueNormalized);
                })
                .map((video) => {
                  return (
                    <a href={video.url}>
                      <img src={video.thumb} />
                      <span>{video.title}</span>
                    </a>
                  );
                })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}

export default Timeline;
