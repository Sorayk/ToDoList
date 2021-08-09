import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import "../css/DayTab.css";

function DayTab({ handleFinishedTask, removeTask, tasks }) {
  return (
    <>
      <Tabs className="tabs-part">
        <TabList>
          <Tab>Monday</Tab>
          <Tab>Tuesday</Tab>
          <Tab>Wednesday</Tab>
          <Tab>Thursday</Tab>
          <Tab>Friday</Tab>
          <Tab>Saturday</Tab>
          <Tab>Sunday</Tab>
        </TabList>

        <TabPanel>{tasks.text}</TabPanel>

        <TabPanel>Tuesday</TabPanel>

        <TabPanel>Wednesday</TabPanel>

        <TabPanel>Thursday</TabPanel>

        <TabPanel>Friday</TabPanel>

        <TabPanel>Saturday</TabPanel>

        <TabPanel>Sunday</TabPanel>
      </Tabs>
    </>
  );
}

export default DayTab;
