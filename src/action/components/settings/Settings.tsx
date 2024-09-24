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
          storageKey="newTabSpeed"
          options={[
            {
              value: "normal",
              label: "Set to normal speed (1x)",
            },
            {
              type: "custom",
              label: "Set to custom speed",
            },
            {
              value: "last",
              label: "Restore last used speed",
            },
            {
              value: "doNothing",
              label: "Do nothing (use YouTube's default behavior)",
            },
          ]}
        />
      </SettingsSection>

      <SettingsSection
        title="Next video speed"
        tips={["When loading a new video in the same tab"]}
      >
        <RadioOptions
          storageKey="newVideoSpeed"
          options={[
            {
              value: "restore",
              label: "Restore to default speed",
            },
            {
              value: "keep",
              label: "Keep the same speed",
            },
            {
              value: "doNothing",
              label: "Do nothing (use YouTube's default behavior)",
            },
          ]}
        />
      </SettingsSection>

      <SettingsSection
        title="Sync between tabs"
        tips={["When changing speed in one YouTube tab"]}
      >
        <RadioOptions
          storageKey="tabSync"
          options={[
            {
              value: "noSync",
              label: "Only apply the change in current tab",
            },
            {
              value: "sync",
              label: "Apply the same speed in all open YouTube tabs",
            },
          ]}
        />
      </SettingsSection>
    </SettingsLayout>
  );
}

export default Settings;
