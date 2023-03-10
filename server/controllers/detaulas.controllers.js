import { pool } from '../db.js'
export const getDetAulas = async (req, res) => {
  try {
    // TODO : FIX -1 [-5:]
    const [result] = await pool.query(
      'SELECT * FROM detaulas ORDER BY aula DESC LIMIT 5'
    )
    res.json(result)
  } catch (error) {
    return res.status(500).json({ DBmessage: error.message })
  }
}

export const getDetAula = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM detaulas WHERE id = ?', [
      req.params.id
    ])
    if (result.length === 0) {
      return res.status(404).json({ DBmessage: 'detaula not found' })
    }
    res.json(result[0])
  } catch (error) {
    return res.status(500).json({ DBmessage: error.message })
  }
}

export const createDetAula = async (req, res) => {
  try {
    const keys = Object.keys(req.body)
    const values = Object.values(req.body)
    const query = `INSERT INTO detaulas (${keys.join(',')}) VALUES (${values
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

// export const createDetAula = async (req, res) => {
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
//       "INSERT INTO DetDetAulas(id, codbar, nomprod, exiprod, venprod,  fecapa,  undfra, pvenfra) VALUES (?,?,?,?,?,?,?,?)",
//       [id, codbar, nomprod, exiprod, venprod, fecapa, undfra, pvenfra]
//     );
//     res.json({
//       result,
//     });
//   } catch (error) {
//     return res.status(500).json({ DBmessage: error.message });
//   }
// };

export const updateDetAula = async (req, res) => {
  try {
    const [result] = await pool.query('UPDATE detaulas SET ? WHERE id = ?', [
      req.body,
      req.params.id
    ])
    res.json(result)
  } catch (error) {
    return res.status(500).json({ DBmessage: error.message })
  }
}

export const deleteDetAula = async (req, res) => {
  try {
    const [result] = await pool.query('DELETE FROM detaulas WHERE id = ?', [
      req.params.id
    ])
    if (result.affectedRows === 0) {
      return res.status(404).json({ DBmessage: 'detaula not found' })
    }
    return res.sendStatus(204)
  } catch (error) {
    return res.status(500).json({ DBmessage: error.message })
  }
}

// export const getLastDetAula = async (req, res) => {
//   try {
//     const [result] = await pool.query(
//       'SELECT id FROM DetDetAulas ORDER BY id DESC LIMIT 1'
//     )
//     res.json(result[0])
//   } catch (error) {
//     return res.status(500).json({ DBmessage: error.message })
//   }
// }

// export const searchDetAulas = async (req, res) => {
//   try {
//     const { search } = req.body
//     if (search === '' || search === undefined) {
//       const [result] = await pool.query(
//         'SELECT * FROM DetAulas ORDER BY id DESC LIMIT 5'
//       )
//       res.json(result)
//     } else {
//       const words = search.split(',')
//       if (words.length === 1) {
//         const [result] = await pool.query(
//           'SELECT * FROM DetAulas WHERE id = ? LIMIT 1',
//           [words[0]]
//         )
//         if (result.length === 1) {
//           res.json(result)
//         } else {
//           const [result] = await pool.query(
//             'SELECT * FROM DetAulas WHERE id = ? OR nomprod LIKE ?  LIMIT 50',
//             [words[0], `%${words[0]}%`]
//           )
//           res.json(result)
//         }
//       } else if (words.length === 2) {
//         const [result] = await pool.query(
//           'SELECT * FROM DetAulas WHERE nomprod LIKE ? AND nomprod LIKE ?  LIMIT 50',
//           [`%${words[0]}%`, `%${words[1]}%`]
//         )
//         res.json(result)
//       } else if (words.length >= 3) {
//         const [result] = await pool.query(
//           'SELECT * FROM DetAulas WHERE nomprod LIKE ? AND nomprod LIKE ? AND nomprod LIKE ?  LIMIT 50',
//           [`%${words[0]}%`, `%${words[1]}%`, `%${words[2]}%`]
//         )
//         res.json(result)
//       }
//     }
//   } catch (error) {
//     return res.status(500).json({ DBmessage: error.message })
//   }
// }
