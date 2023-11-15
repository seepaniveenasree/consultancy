// server.js
// ... (previous code)

// API to list all service details
app.get('/api/service-details', async (req, res) => {
    try {
      const details = await ServiceDetails.find();
      res.json(details);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // API to add a new service detail
  app.post('/api/service-details', async (req, res) => {
    try {
      const newDetail = new ServiceDetails(req.body);
      const savedDetail = await newDetail.save();
      res.json(savedDetail);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // API to delete a service detail by ID
  app.delete('/api/service-details/:id', async (req, res) => {
    try {
      await ServiceDetails.findByIdAndDelete(req.params.id);
      res.json({ message: 'Service detail deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // ... (continue with other APIs for update, sort, view, filter, search, etc.)
  
  // Make sure to adjust and expand these APIs based on your specific requirements.
  