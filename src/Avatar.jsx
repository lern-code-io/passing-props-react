export const Avatar = ({ url, title }) => {
    if (url && title) {
      return <img alt={title} src={url} />;
    } else {
      return <div>Props need to be propogated</div>;
    }
  };
  