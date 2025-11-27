const getAllPets = async (req, res) => {
    try {
        const pool = "SELECT * FROM pets";
        const [rows] = await pool.query(query);

        console.log(rows);
    } catch (error) {
        return res.status(500).json({message: error.message});
    }
} 
const getPetById = async (req, res) => {

}

const addPet = async (req, res) => {
}

const updatePet = async (req, res) => {

}

const deletePet = async (req, res) => {

}

module.exports = {getAllPets, getPetById, addPet, updatePet, deletePet};