const express = require('express');
const router = express.Router();
const { getAllPatientDetails,addNewPatient,updatePatients,deletePatients} = require('../controllers/patientController')
const {validatePatient} = require('../controllers/validateController')

router.get('/', getAllPatientDetails);
router.post('/admin/add',addNewPatient)
router.patch('/admin/edit',updatePatients)
router.delete('/admin/delete',deletePatients)
router.post('/validate',validatePatient)


module.exports = router;
