// (C) 2007-2019 GoodData Corporation
import React, { Component } from "react";
import { DateFilter, Model, DateFilterHelpers, PivotTable } from "@gooddata/react-components";
import "@gooddata/react-components/styles/css/dateFilter.css";
import {
    projectId,
    dateDataSetTestCSV,
    // yearTestCSV,
    monthYearTestCSV,
    educationIdentifier,
    sumAmountIdentifier,
    avgAmountIdentifier,
} from "../utils/fixtures";

const dateFrom = new Date();
dateFrom.setMonth(dateFrom.getMonth() - 1);

const measures = [
    Model.measure(sumAmountIdentifier)
        .format("#,##0")
        .localIdentifier("sum"),
    Model.measure(avgAmountIdentifier)
        .format("#,##0")
        .localIdentifier("avg"),
];

const attributes = [
    Model.attribute(monthYearTestCSV).localIdentifier("month"),
    Model.attribute(educationIdentifier).localIdentifier("edu"),
];

const availableGranularities = [
    "GDC.time.date",
    "GDC.time.month",
    "GDC.time.quarter",
    "GDC.time.year",
    "GDC.time.week_us",
];
const defaultDateFilterOptions = {
    allTime: {
        localIdentifier: "ALL_TIME",
        type: "allTime",
        name: "",
        visible: true,
    },

    absoluteForm: {
        localIdentifier: "ABSOLUTE_FORM",
        type: "absoluteForm",
        from: "2016-01-01",
        to: "2016-12-31",
        // from: dateFrom.toISOString().substr(0, 10), // 'YYYY-MM-DD'
        // to: new Date().toISOString().substr(0, 10), // 'YYYY-MM-DD'
        name: "",
        visible: true,
    },
    absolutePreset: [
        {
            from: "2015-01-01",
            to: "2015-12-31",
            name: "Year 2015",
            localIdentifier: "year2015",
            visible: true,
            type: "absolutePreset",
        },
        {
            from: "2016-01-01",
            to: "2016-12-31",
            name: "Year 2016",
            localIdentifier: "year2016",
            visible: true,
            type: "absolutePreset",
        },
        {
            from: "2017-01-01",
            to: "2017-12-31",
            name: "Year 2017",
            localIdentifier: "year2017",
            visible: true,
            type: "absolutePreset",
        },
    ],
    relativeForm: {
        localIdentifier: "RELATIVE_FORM",
        type: "relativeForm",
        granularity: "GDC.time.year",
        from: 0,
        to: -1,
        name: "",
        visible: true,
        availableGranularities,
    },
    relativePreset: {
        "GDC.time.date": [
            {
                from: -1,
                to: 0,
                granularity: "GDC.time.date",
                localIdentifier: "Last_2_days",
                type: "relativePreset",
                visible: true,
                name: "Last 2 days",
            },
            {
                from: -6,
                to: 0,
                granularity: "GDC.time.date",
                localIdentifier: "LAST_7_DAYS",
                type: "relativePreset",
                visible: true,
                name: "Last 7 days",
            },
            {
                from: -29,
                to: 0,
                granularity: "GDC.time.date",
                localIdentifier: "LAST_30_DAYS",
                type: "relativePreset",
                visible: true,
                name: "",
            },
            {
                from: -89,
                to: 0,
                granularity: "GDC.time.date",
                localIdentifier: "LAST_90_DAYS",
                type: "relativePreset",
                visible: true,
                name: "",
            },
        ],
        "GDC.time.week_us": [
            {
                from: 0,
                to: 0,
                granularity: "GDC.time.week_us",
                localIdentifier: "THIS_WEEK",
                type: "relativePreset",
                visible: true,
                name: "",
            },
            {
                from: -1,
                to: -1,
                granularity: "GDC.time.week_us",
                localIdentifier: "LAST_WEEK",
                type: "relativePreset",
                visible: true,
                name: "Last week edit",
            },
            {
                from: -1,
                to: 0,
                granularity: "GDC.time.week_us",
                localIdentifier: "LAST_2_WEEKS",
                type: "relativePreset",
                visible: true,
                name: "Last 2 weeks",
            },
            {
                from: -3,
                to: 0,
                granularity: "GDC.time.week_us",
                localIdentifier: "LAST_4_WEEKs",
                type: "relativePreset",
                visible: true,
                name: "",
            },
        ],
        "GDC.time.month": [
            {
                from: 0,
                to: 0,
                granularity: "GDC.time.month",
                localIdentifier: "THIS_MONTH",
                type: "relativePreset",
                visible: true,
                name: "",
            },
            {
                from: -1,
                to: -1,
                granularity: "GDC.time.month",
                localIdentifier: "LAST_MONTH",
                type: "relativePreset",
                visible: true,
                name: "",
            },
            {
                from: -1,
                to: 0,
                granularity: "GDC.time.month",
                localIdentifier: "LAST_2_MONTHS",
                type: "relativePreset",
                visible: true,
                name: "",
            },
            {
                from: -11,
                to: 0,
                granularity: "GDC.time.month",
                localIdentifier: "LAST_12_MONTHS",
                type: "relativePreset",
                visible: true,
                name: "",
            },
        ],
        "GDC.time.quarter": [
            {
                from: 0,
                to: 0,
                granularity: "GDC.time.quarter",
                localIdentifier: "THIS_QUARTER",
                type: "relativePreset",
                visible: true,
                name: "",
            },
            {
                from: -1,
                to: -1,
                granularity: "GDC.time.quarter",
                localIdentifier: "LAST_QUARTER",
                type: "relativePreset",
                visible: true,
                name: "",
            },
            {
                from: -1,
                to: 0,
                granularity: "GDC.time.quarter",
                localIdentifier: "LAST_2_QUARTERS",
                type: "relativePreset",
                visible: true,
                name: "",
            },
            {
                from: -3,
                to: 0,
                granularity: "GDC.time.quarter",
                localIdentifier: "LAST_4_QUARTERS",
                type: "relativePreset",
                visible: true,
                name: "Last 4 Quarters ['cộng hòa xã hội chủ nghĩa Việt Nam, độc lập tự do hạnh phúc']",
            },
        ],
        "GDC.time.year": [
            {
                from: 0,
                to: 0,
                granularity: "GDC.time.year",
                localIdentifier: "THIS_YEAR",
                type: "relativePreset",
                visible: true,
                name: "",
            },
            {
                from: -1,
                to: -1,
                granularity: "GDC.time.year",
                localIdentifier: "LAST_YEAR",
                type: "relativePreset",
                visible: true,
                name: "",
            },
            {
                from: -1,
                to: 0,
                granularity: "GDC.time.year",
                localIdentifier: "LAST_2_YEARS",
                type: "relativePreset",
                visible: true,
                name: "",
            },
            {
                from: 5,
                to: -1,
                granularity: "GDC.time.year",
                localIdentifier: "FROM_1_YEAR_AGO_TO_5_YEARS_AHEAD",
                type: "relativePreset",
                visible: true,
                name: "",
            },
        ],
    },
};

export class DateFilterInPVTable_CSVFile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedFilterOption: defaultDateFilterOptions.allTime,
            excludeCurrentPeriod: false,
        };
    }
    onOpen = () => {
        // eslint-disable-next-line no-console
        console.log("DateFilterInPVTable_CSVFile onOpen");
    };

    onClose = () => {
        // eslint-disable-next-line no-console
        console.log("DateFilterInPVTable_CSVFile onClose");
    };
    onApply = (dateFilterOption, excludeCurrentPeriod) => {
        this.setState({
            selectedFilterOption: dateFilterOption,
            excludeCurrentPeriod,
        });
        console.log(
            "DateFilterInPVTable_CSVFile onApply",
            "selectedFilterOption:",
            dateFilterOption,
            "excludeCurrentPeriod:",
            excludeCurrentPeriod,
        );
    };

    render() {
        const dateFilter = DateFilterHelpers.mapOptionToAfm(
            this.state.selectedFilterOption,
            {
                identifier: dateDataSetTestCSV,
            },
            this.state.excludeCurrentPeriod,
        );

        return (
            <div>
                <div style={{ width: 200 }}>
                    <DateFilter
                        excludeCurrentPeriod={this.state.excludeCurrentPeriod}
                        selectedFilterOption={this.state.selectedFilterOption}
                        filterOptions={defaultDateFilterOptions}
                        availableGranularities={availableGranularities}
                        customFilterName="Selected date range"
                        dateFilterMode="active"
                        onApply={this.onApply}
                    />
                </div>
                <div style={{ height: 300 }}>
                    <PivotTable
                        projectId={projectId}
                        measures={measures}
                        rows={attributes}
                        onLoadingChanged={this.onLoadingChanged}
                        filters={dateFilter ? [dateFilter] : []}
                    />
                </div>
            </div>
        );
    }
}

export default DateFilterInPVTable_CSVFile;
