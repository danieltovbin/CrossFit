import { Request, Response } from "express";
import { Equipment } from "./equipmentsModel";

export const getAllEquipments = async (req:Request, res:Response) => {
    const equipments = await Equipment.find();
    if(!equipments) return res.status(204).json({ 'message': 'No equipments found.' });
    res.json(equipments)
}

export const createEquipment = async (req:Request, res:Response) => {
    if (!req?.body?.name || !req?.body?.price || !req?.body?.imgUrl) {
        return res.status(400).json( { 'message': 'Name, price and imgUrl are required'});
    }

    try {
        const result = await Equipment.create({
            name: req.body.name,
            price: req.body.price,
            imgUrl: req.body.imgUrl
        });
        res.status(201).json(result);
    } catch (error) {
        console.error(error)
    }
}

export const updateEquipment = async (req:Request, res:Response) => {
    if (!req?.body?.id) {
        return res.status(400).json({ 'message': 'ID parameter is required.' });
    }

    const equipment = await Equipment.findOne({ _id: req.body.id }).exec();
    if (!equipment) {
        return res.status(204).json({ "message": `No equipment matches ID ${req.body.id}.` });
    }
    if (req.body?.name) equipment.name = req.body.name;
    if (req.body?.price) equipment.price = req.body.price;
    if (req.body?.imgUrl) equipment.imgUrl = req.body.imgUrl;
    const result = await equipment.save();
    res.json(result);
}

export const deleteEquipment = async (req:Request, res:Response) => {
    if(!req?.body?.id) return res.status(400).json({ 'message': 'Product ID required.' });

    const equipment = await Equipment.findOne({ _id: req.body.id }).exec();
    if(!equipment){
        return res.status(204).json({ "message": `No equipment matches ID ${req.body.id}.`});
    }
    const result = await equipment.deleteOne({ _id: req.body.id });
    res.json(result);
}

export const getEquipment = async (req:Request, res:Response) => {
    if(!req?.params?.id) return res.status(400).json({ 'message': 'Product ID required.' });

    const equipment = await Equipment.findOne({ _id: req.params.id }).exec();
    if(!equipment) {
        return res.status(204).json({ "message": `No equipment matches ID ${req.params.id}.` });
    }
    res.json(equipment);
}