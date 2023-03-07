import { pool } from '../db.js'
export const getAulas = async (req, res) => {
  try {
    // TODO : FIX -1 [-5:]
    const [result] = await pool.query(
      'SELECT * FROM aulas ORDER BY nombre DESC LIMIT 5'
    )
    res.json(result)
  } catch (error) {
    return res.status(500).json({ DBmessage: error.message })
  }
}

export const getAula = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM aulas WHERE id = ?', [
      req.params.id
    ])
    if (result.length === 0) {
      return res.status(404).json({ DBmessage: 'Product not found' })
    }
    res.json(result[0])
  } catch (error) {
    return res.status(500).json({ DBmessage: error.message })
  }
}

export const createAula = async (req, res) => {
  try {
    const keys = Object.keys(req.body)
    const values = Object.values(req.body)
    const query = `INSERT INTO aulas (${keys.join(',')}) VALUES (${values
      .map((value) => '?')
      .join(',')})`
    const [result] = await pool.query(query, values)
    res.json({
      result
    })
  } catch (error) {
    return res.status(500).json({ DBmessage: error.message })
  }
}

// export const createAula = async (req, res) => {
//   try {
//     const {
//       id,
//       codbar,
//       nomprod,
//       exiprod,
//       venprod,
//       fecapa,
//       undfra,
//       pvenfra,
//     } = req.body;
//     console.log(req.body);
//     // if(tipcos===undefined) tipcos = "UC";
//     // if(cosulc===undefined) cosulc = 0;
//     // if(ivainc===undefined) ivainc = "N";
//     // if(fecapa===undefined) fecapa = new Date().toJSON().slice(0,10).replace(/-/g,'/');
//     // if(canven===undefined) canven = 0;
//     const [result] = await pool.query(
//       "INSERT INTO Aulas(id, codbar, nomprod, exiprod, venprod,  fecapa,  undfra, pvenfra) VALUES (?,?,?,?,?,?,?,?)",
//       [id, codbar, nomprod, exiprod, venprod, fecapa, undfra, pvenfra]
//     );
//     res.json({
//       result,
//     });
//   } catch (error) {
//     return res.status(500).json({ DBmessage: error.message });
//   }
// };

export const updateAula = async (req, res) => {
  try {
    const [result] = await pool.query('UPDATE aulas SET ? WHERE id = ?', [
      req.body,
      req.params.id
    ])
    res.json(result)
  } catch (error) {
    return res.status(500).json({ DBmessage: error.message })
  }
}

export const deleteAula = async (req, res) => {
  try {
    const [result] = await pool.query('DELETE FROM aulas WHERE id = ?', [
      req.params.id
    ])
    if (result.affectedRows === 0) {
      return res.status(404).json({ DBmessage: 'Task not found' })
    }
    return res.sendStatus(204)
  } catch (error) {
    return res.status(500).json({ DBmessage: error.message })
  }
}

// export const getLastAula = async (req, res) => {
//   try {
//     const [result] = await pool.query(
//       'SELECT id FROM Aulas ORDER BY id DESC LIMIT 1'
//     )
//     res.json(result[0])
//   } catch (error) {
//     return res.status(500).json({ DBmessage: error.message })
//   }
// }

// export const searchAulas = async (req, res) => {
//   try {
//     const { search } = req.body
//     if (search === '' || search === undefined) {
//       const [result] = await pool.query(
//         'SELECT * FROM Aulas ORDER BY id DESC LIMIT 5'
//       )
//       res.json(result)
//     } else {
//       const words = search.split(',')
//       if (words.length === 1) {
//         const [result] = await pool.query(
//           'SELECT * FROM Aulas WHERE id = ? LIMIT 1',
//           [words[0]]
//         )
//         if (result.length === 1) {
//           res.json(result)
//         } else {
//           const [result] = await pool.query(
//             'SELECT * FROM Aulas WHERE id = ? OR nomprod LIKE ?  LIMIT 50',
//             [words[0], `%${words[0]}%`]
//           )
//           res.json(result)
//         }
//       } else if (words.length === 2) {
//         const [result] = await pool.query(
//           'SELECT * FROM Aulas WHERE nomprod LIKE ? AND nomprod LIKE ?  LIMIT 50',
//           [`%${words[0]}%`, `%${words[1]}%`]
//         )
//         res.json(result)
//       } else if (words.length >= 3) {
//         const [result] = await pool.query(
//           'SELECT * FROM Aulas WHERE nomprod LIKE ? AND nomprod LIKE ? AND nomprod LIKE ?  LIMIT 50',
//           [`%${words[0]}%`, `%${words[1]}%`, `%${words[2]}%`]
//         )
//         res.json(result)
//       }
//     }
//   } catch (error) {
//     return res.status(500).json({ DBmessage: error.message })
//   }
// }
