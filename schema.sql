-- Create Patient Table
CREATE TABLE Patient (
    patient_id INT PRIMARY KEY,
    patient_name VARCHAR(100) NOT NULL,
    age INT,
    gender VARCHAR(10),
    phone VARCHAR(15)
);

-- Create Sample Table
CREATE TABLE Sample (
    sample_id INT PRIMARY KEY,
    patient_id INT,
    test_name VARCHAR(100),
    collection_date DATE,
    status VARCHAR(20),
    pending_days INT,
    FOREIGN KEY (patient_id) REFERENCES Patient(patient_id)
);

-- Create Report Table
CREATE TABLE Report (
    report_id INT PRIMARY KEY,
    sample_id INT,
    report_date DATE,
    report_status VARCHAR(20),
    remarks TEXT,
    FOREIGN KEY (sample_id) REFERENCES Sample(sample_id)
);

-- Create Status History Table
CREATE TABLE StatusHistory (
    history_id INT PRIMARY KEY,
    sample_id INT,
    old_status VARCHAR(20),
    new_status VARCHAR(20),
    updated_on DATE,
    FOREIGN KEY (sample_id) REFERENCES Sample(sample_id)
);