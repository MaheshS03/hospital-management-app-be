const initialData = 
[
    {
      "patientID": "1001",
      "patientName": "John Doe",
      "gender": "Male",
      "age": 35,
      "diagnosis": "Fever",
      "admissionDate": "2024-05-10"
    },
    {
      "patientID": "1002",
      "patientName": "Jane Smith",
      "gender": "Female",
      "age": 45,
      "diagnosis": "Fractured leg",
      "admissionDate": "2024-05-12"
    },
    {
      "patientID": "1003",
      "patientName": "Michael Johnson",
      "gender": "Male",
      "age": 50,
      "diagnosis": "Heart Attack",
      "admissionDate": "2024-05-14"
    },
    {
      "patientID": "1004",
      "patientName": "Emily Brown",
      "gender": "Female",
      "age": 28,
      "diagnosis": "Pneumonia",
      "admissionDate": "2024-05-16"
    },
    {
      "patientID": "1005",
      "patientName": "David Wilson",
      "gender": "Male",
      "age": 42,
      "diagnosis": "Appendicitis",
      "admissionDate": "2024-05-18"
    },
    {
      "patientID": "1006",
      "patientName": "Emma Martinez",
      "gender": "Female",
      "age": 31,
      "diagnosis": "Migraine",
      "admissionDate": "2024-05-20"
    },
    {
      "patientID": "1007",
      "patientName": "Christopher Lee",
      "gender": "Male",
      "age": 55,
      "diagnosis": "Diabetes",
      "admissionDate": "2024-05-22"
    },
    {
      "patientID": "1008",
      "patientName": "Olivia Taylor",
      "gender": "Female",
      "age": 38,
      "diagnosis": "Broken arm",
      "admissionDate": "2024-05-24"
    },
    {
      "patientID": "1009",
      "patientName": "Daniel Anderson",
      "gender": "Male",
      "age": 48,
      "diagnosis": "Stroke",
      "admissionDate": "2024-05-26"
    },
    {
      "patientID": "1010",
      "patientName": "Ava Garcia",
      "gender": "Female",
      "age": 27,
      "diagnosis": "Anemia",
      "admissionDate": "2024-05-28"
    },
    {
      "patientID": "1011",
      "patientName": "James Rodriguez",
      "gender": "Male",
      "age": 60,
      "diagnosis": "Arthritis",
      "admissionDate": "2024-05-30"
    },
    {
      "patientID": "1012",
      "patientName": "Sophia Hernandez",
      "gender": "Female",
      "age": 25,
      "diagnosis": "Flu",
      "admissionDate": "2024-06-01"
    },
    {
      "patientID": "1013",
      "patientName": "William Smith",
      "gender": "Male",
      "age": 33,
      "diagnosis": "Asthma",
      "admissionDate": "2024-06-03"
    },
    {
      "patientID": "1014",
      "patientName": "Isabella Martinez",
      "gender": "Female",
      "age": 47,
      "diagnosis": "Cancer",
      "admissionDate": "2024-06-05"
    },
    {
      "patientID": "1015",
      "patientName": "Alexander Johnson",
      "gender": "Male",
      "age": 40,
      "diagnosis": "Hypertension",
      "admissionDate": "2024-06-07"
    },
    {
      "patientID": "1016",
      "patientName": "Mia Brown",
      "gender": "Female",
      "age": 29,
      "diagnosis": "Gastritis",
      "admissionDate": "2024-06-09"
    },
    {
      "patientID": "1017",
      "patientName": "Benjamin Wilson",
      "gender": "Male",
      "age": 44,
      "diagnosis": "Kidney Stones",
      "admissionDate": "2024-06-11"
    },
    {
      "patientID": "1018",
      "patientName": "Charlotte Taylor",
      "gender": "Female",
      "age": 36,
      "diagnosis": "Pregnancy",
      "admissionDate": "2024-06-13"
    },
    {
      "patientID": "1019",
      "patientName": "Ethan Anderson",
      "gender": "Male",
      "age": 52,
      "diagnosis": "Gout",
      "admissionDate": "2024-06-15"
    },
    {
      "patientID": "1020",
      "patientName": "Amelia Garcia",
      "gender": "Female",
      "age": 30,
      "diagnosis": "Rheumatism",
      "admissionDate": "2024-06-17"
    },
    {
      "patientID": "1021",
      "patientName": "Jacob Hernandez",
      "gender": "Male",
      "age": 37,
      "diagnosis": "Tuberculosis",
      "admissionDate": "2024-06-19"
    },
    {
      "patientID": "1022",
      "patientName": "Harper Smith",
      "gender": "Female",
      "age": 26,
      "diagnosis": "Allergy",
      "admissionDate": "2024-06-21"
    },
    {
      "patientID": "1023",
      "patientName": "Ryan Martinez",
      "gender": "Male",
      "age": 49,
      "diagnosis": "Epilepsy",
      "admissionDate": "2024-06-23"
    },
    {
      "patientID": "1024",
      "patientName": "Abigail Johnson",
      "gender": "Female",
      "age": 34,
      "diagnosis": "Malaria",
      "admissionDate": "2024-06-25"
    },
    {
      "patientID": "1025",
      "patientName": "Noah Brown",
      "gender": "Male",
      "age": 46,
      "diagnosis": "Obesity",
      "admissionDate": "2024-06-27"
    },
    {
      "patientID": "1026",
      "patientName": "Ella Wilson",
      "gender": "Female",
      "age": 32,
      "diagnosis": "Hyperthyroidism",
      "admissionDate": "2024-06-29"
    },
    {
      "patientID": "1027",
      "patientName": "Logan Taylor",
      "gender": "Male",
      "age": 41,
      "diagnosis": "Depression",
      "admissionDate": "2024-07-01"
    },
    {
      "patientID": "1028",
      "patientName": "Avery Anderson",
      "gender": "Female",
      "age": 35,
      "diagnosis": "Anxiety",
      "admissionDate": "2024-07-03"
    },
    {
      "patientID": "1029",
      "patientName": "Sofia Garcia",
      "gender": "Female",
      "age": 39,
      "diagnosis": "Schizophrenia",
      "admissionDate": "2024-07-05"
    },
    {
      "patientID": "1030",
      "patientName": "Liam Hernandez",
      "gender": "Male",
      "age": 53,
      "diagnosis": "Alzheimer's",
      "admissionDate": "2024-07-07"
    }
  ]

  module.exports = initialData
  