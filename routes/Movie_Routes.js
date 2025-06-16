import { Router } from 'express';
const router = Router();
import Movie from '../models/Movie.js';

// GET all movies
router.get('/', async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
});

// POST a new movie
router.post('/', async (req, res) => {
  try {
    const { title, addedBy } = req.body;
    
    if (!title) {
      return res.status(400).json({ message: 'Title is required' });
    }

    const newMovie = new Movie({ 
      title,  // Just pass the string value
      addedBy, // This will be undefined if not provided
      addedAt: new Date()  // Set the current date and time when the movie is created
    });
    
    await newMovie.save(); 
    
    // Send back the created movie (which includes the addedAt field)
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// DELETE a movie by ID
router.delete('/:id', async (req, res) => {
  await Movie.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
});

export default router;