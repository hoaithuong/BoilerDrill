import React from "react";
import Page from "../components/Page";
import DateFilterExample from "./components/DateFilterExample";
import DateFilterComponentExample from "./components/DateFilterComponentExample";
import DateFilterInPivotTableExample from "./components/DateFilterInPivotTableExample";
import DateFilterInVisualization from "./components/DateFilterInVisualization";
import DateFilterInKPI from "./components/DateFilterInKPI";
// import DateFilterInPVTable_CSVFile from "./components/DateFilterInPVTable_CSVFile";

const DateFilterComponents = () => {
    return (
        <Page>
            <h2>Date Filter Components</h2>
            <p>These examples show how to use the Date Filter component.</p>
            <div>
                <h3>Date Filter</h3>
                <p>This example shows a full-featured date filter component.</p>
                <DateFilterExample />
                <br />
            </div>
            <div>
                <h3>Filtering a report</h3>
                <p>
                    This example shows how to add date filter component into a report. Presets and floating
                    range form is restricted to years.
                </p>
                <DateFilterComponentExample />
                <br />
            </div>
            <div>
                <h3>Pivot table with Date filter</h3>
                <DateFilterInPivotTableExample />
            </div>
            <div>
                <h3>Visualization with Date filter</h3>
                <DateFilterInVisualization />
            </div>
            <div>
                <h3>KPI with Date filter</h3>
                <DateFilterInKPI />
            </div>
            <div>
                <h3>CSV test PVT with Date filter</h3>
                {/* <DateFilterInPVTable_CSVFile /> */}
            </div>
        </Page>
    );
};

export default DateFilterComponents;
