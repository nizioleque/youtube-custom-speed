import RadioOptions from "./components/RadioOptions";
import Section from "./components/Section";

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

      <Section
        title="Speed list"
        tips={[
          "Click a speed value to remove it",
          "Enter a new value and click Enter to add it",
        ]}
      >
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
      </Section>

      <Section title="Default speed" tips={["When opening a new YouTube tab"]}>
        <RadioOptions
          storageKey="newtab"
          options={[
            { label: "Set to normal speed (1x)", value: "normal" },
            {
              label: "Set to custom speed",
              value: "custom",
              custom: true,
              customProps: {
                type: "number",
                step: "0.1",
                min: "0.0625",
                max: "16",
              },
            },
            { label: "Restore last used speed", value: "last" },
            {
              label: "Do nothing (use YouTube's default behavior)",
              value: "do-nothing",
            },
          ]}
        />
      </Section>

      <Section
        title="Next video speed"
        tips={["When loading a new video in the same tab"]}
      >
        <RadioOptions
          storageKey="newvid"
          options={[
            { label: "Restore to default speed", value: "restore" },
            { label: "Keep the same speed", value: "keep" },
            {
              label: "Do nothing (use YouTube's default behavior)",
              value: "do-nothing",
            },
          ]}
        />
      </Section>

      <Section
        title="Sync between tabs"
        tips={["When changing speed in one YouTube tab"]}
      >
        <RadioOptions
          storageKey="tabsync"
          options={[
            { label: "Only apply the change in current tab", value: "nosync" },
            {
              label: "Apply the same speed in all open YouTube tabs",
              value: "sync",
            },
          ]}
        />
      </Section>
    </>
  );
}

export default Action;
