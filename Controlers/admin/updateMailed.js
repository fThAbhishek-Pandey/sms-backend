import SheetModel from "../../Modules/spreadDataModel.js"
const updateMailed =async (sheet_id,index) => {
    try {
        // Use the positional array syntax to update the `mailed` field
        const updateField = `employee.${index}.mailed`;
        await SheetModel.findByIdAndUpdate(
            sheet_id,
            { $set: { [updateField]: true } }, // Dynamic field update
            { new: true } // Return the updated document
        );
        console.log(`Successfully updated mailed status for employee at index ${index}`);
    } catch (error) {
        console.error(`Error updating mailed status:`, error);
        throw error; // Re-throw the error for higher-level handling if needed
    }
}

export default updateMailed