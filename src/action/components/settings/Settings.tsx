import RadioOptions from "./RadioOptions";
import SettingsLayout from "./SettingsLayout";
import SettingsSection from "./SettingsSection";
import SpeedList from "./SpeedList";

function Settings() {
  return (
    <SettingsLayout>
      <SettingsSection title="Speed list" tips={["Customize speed values"]}>
        <SpeedList />
      </SettingsSection>

      <SettingsSection
        title="Default speed"
        tips={["When opening a new YouTube tab"]}
      >
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
      </SettingsSection>

      <SettingsSection
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
      </SettingsSection>

      <SettingsSection
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
      </SettingsSection>
    </SettingsLayout>
  );
}

export default Settings;
