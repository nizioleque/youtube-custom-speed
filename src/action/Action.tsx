function Action() {
  return (
    <>
      <header>
        <h1 data-string="extName"></h1>
      </header>

      <div id="error" className="info">
        <p>
          An error occurred! Please refresh the page and try again in a few
          minutes.
          <br />
          If the error persists, please contact me at nizioleque@gmail.com
          including the error message shown below
        </p>
        <p>Error message:</p>
        <p id="error-msg"></p>
      </div>

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

      <div style={{ display: "none" }}>
        <label id="advanced">
          <input type="checkbox" name="advanced" />
          Show advanced settings
        </label>
        <p className="tip">
          Don&apos;t be afraid! They&apos;re not that advanced
        </p>
      </div>

      <div>
        <h2>Speed list</h2>
        <p className="tip-h2">
          Click a speed value to remove it
          <br />
          Enter a new value and click Enter to add it
        </p>
        <div id="speed-menu">{/* speed options added dynamically */}</div>

        <div id="add-speed">
          <input
            type="number"
            placeholder="Add new..."
            min="0.1"
            max="16"
            step="0.1"
            id="speed-input"
          />
        </div>

        <p id="add-error">
          The value is not in the supported playback range (0.0625x - 16x)
        </p>
      </div>

      <div>
        <h2>Default speed</h2>
        <p className="tip-h2">When opening a new YouTube tab</p>
        <label>
          <input type="radio" name="newtab" value="normal" />
          Set to normal speed (1x)
        </label>
        <label>
          <input type="radio" name="newtab" value="custom" />
          Set to custom speed
          <input
            className="input-custom"
            type="number"
            name="customSpeed"
            step="0.1"
            min="0.0625"
            max="16"
            data-setting-name="newtab"
          />
        </label>
        <label>
          <input type="radio" name="newtab" value="last" />
          Restore last used speed
        </label>
        <label>
          <input type="radio" name="newtab" value="do-nothing" />
          Do nothing (use YouTube&apos;s default behavior)
        </label>
      </div>

      <div>
        <h2>Next video speed</h2>
        <p className="tip-h2">When loading a new video in the same tab</p>
        <label>
          <input type="radio" name="newvid" value="restore" />
          Restore to default speed
        </label>
        <label>
          <input type="radio" name="newvid" value="keep" />
          Keep the same speed
        </label>
        <label>
          <input type="radio" name="newvid" value="do-nothing" />
          Do nothing (use YouTube&apos;s default behavior)
        </label>
      </div>

      <div>
        <h2>Sync between tabs</h2>
        <p className="tip-h2">When changing speed in one YouTube tab</p>
        <label>
          <input type="radio" name="tabsync" value="nosync" />
          Only apply the change in current tab
        </label>
        <label>
          <input type="radio" name="tabsync" value="sync" />
          Apply the same speed in all open YouTube tabs
        </label>
      </div>
    </>
  );
}

export default Action;
