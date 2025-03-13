const conncection = require('../data/db'); 

function index(req, res) {
    //let filterblog = blog;
    //if (req.query.tag) {
        //filterblog = filterblog.filter(p => p.tags.includes(req.query.tag));
    //}
    //res.json(filterblog);
    const MySQL = 'SELECT * FROM blog'

    conncection.query(MySQL,(err, results) => {
        if (err) return res.status(500).json({ error:'Database query failed' });
        res.json(results);
    })
}

function show(req, res) {
    //const post = blog.find(p => p.id == req.params.id);
    //if (post) {
      //  res.json(post);
    //} else {
      //  res.status(404).send('Blog non trovato');
    //}
    const id = req.params.id

    const MySQL = `SELECT * FROM blog WHERE id = ${id}`;
}

function store(req, res) {
    const post = {
        id: blog.length + 1,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags,
    };
    blog.push(post);
    res.json(post);
}

function update(req, res) {
    const post = blog.find(p => p.id == req.params.id);
    if (!post) {
        res.status(404).send('Blog non trovato');
    } else {
        post.title = req.body.title;
        post.content = req.body.content;
        post.image = req.body.image;
        post.tags = req.body.tags;
        
        res.json(post);
    }
};

function destroy(req, res) {
    //const index = blog.findIndex(p => p.id == req.params.id);
    //if (index !== -1) {
      //  blog.splice(index, 1);
        //res.sendStatus(204);
    //} else {
      //  res.status(404).send('Blog non trovato');
    //}
    const {id} = req.params;

    connection.query('DELETE FROM blog WHERE id = ?', [id], (err) => {
        if (err) return res.status(500).json({ error: 'Failed to delete blog' });
        res.sendStatus(204);
    });
}

module.exports = { index, show, destroy, update, store };
