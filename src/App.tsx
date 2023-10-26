import { AppLayout } from "@cloudscape-design/components"
import { useState } from "react";
import { SampleModal } from "./components/sample-modal";

function App() {
  const [toggleNavigation, setToggleNavigation] = useState(false);

  return (
    <AppLayout 
      content={<SampleModal />}
      navigation={<div>Navigation</div>}
      navigationOpen={toggleNavigation}
      onNavigationChange={() => setToggleNavigation(!toggleNavigation)}
      ariaLabels={{
        navigation: "Navigation drawer",
        navigationClose: "Close navigation drawer",
        navigationToggle: "Open navigation drawer",
        notifications: "Notifications",
        tools: "Help panel",
        toolsClose: "Close help panel",
        toolsToggle: "Open help panel"
      }}
    />
  )
}

export default App
