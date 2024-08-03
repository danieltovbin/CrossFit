import express from 'express';
import { ROLES_LIST } from '../../config/roles_list';
import verifyRoles from '../../middleware/verifyRoles';
import verifyJWT from '../../middleware/verifyJWT';
import { createEquipment, deleteEquipment, getAllEquipments, getEquipment, updateEquipment } from './equipmentsCont';
const router = express.Router()

router
.get('/get', getAllEquipments)
.post('/create',verifyJWT, verifyRoles(ROLES_LIST.Admin.toString()), createEquipment)
.put('/update', verifyJWT, verifyRoles(ROLES_LIST.Admin.toString()), updateEquipment)
.delete('/delete', verifyJWT, verifyRoles(ROLES_LIST.Admin.toString()), deleteEquipment)
.get('/get/:id', getEquipment)

export default router;