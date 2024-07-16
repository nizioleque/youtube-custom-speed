import Settings from "./Settings";

function Action() {
  return (
    <>
      <header>
        <h1 data-string="extName"></h1>
      </header>

      {/* TODO add error handling */}

      <div id="welcome-short">
        <a
          href="https://www.buymeacoffee.com/nizioleque"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn-support">🍺 Support</button>
        </a>
        <a className="storeReviewURL" target="_blank" rel="noopener noreferrer">
          <button>⭐ Rate</button>
        </a>
        <a className="bugReportURL" target="_blank">
          <button>📧 Report a bug</button>
        </a>
      </div>

      <Settings />
    </>
  );
}

export default Action;
