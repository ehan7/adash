import React from "react";

import "./CreateWorkflow.css";

const CreateWorkflow = () => {
    return (
        <div className="workflow-form-container">
            <h1 className="create-workflow-title">Start Your Workflow</h1>
            <input type="text" id="workflow-name" placeholder="Name Your Workflow"></input>
            <div className="file-upload-container">
                <div className="file-upload">
                    <label htmlFor="emails-doc">Upload Doc of Emails</label>
                    <input type="file" id="emails-doc" accept=".pdf, .docx, .doc" />
                </div>
                <div className="file-upload">
                    <label htmlFor="workflow-csv">Upload CSV of Workflow</label>
                    <input type="file" id="workflow-csv" accept=".csv, .xlsx, .xls" />
                </div>
                <div className="file-upload">
                    <label htmlFor="recipients-csv">Upload CSV of Recipients</label>
                    <input type="file" id="recipients-csv" accept=".csv, .xlsx, .xls" />
                </div>
            </div>
            <button className="submit-button">
                <img src={require("../assets/carbon_document-tasks.png").default} alt="Submit Workflow Image" />
                Submit Workflow
            </button>
        </div>
    );
};

export default CreateWorkflow;
