async function getBooks(options, dao) {
    const { author, sort, page, limit } = options;

    let result = await dao.getAll();

    if(author){
        const authorLower = author.toLowerCase();
        result = result.filter((book) => book.author.toLowerCase().includes(authorLower));
    }

    if(sort){
        let field = sort;
        let order = 1;
        if (field.startsWith("-")) {
            order = -1;
            field = field.slice(1);
        }
        result = [...result].sort((a, b) => {
            if (a[field] < b[field]) return -1 * order;
            if (a[field] > b[field]) return 1 * order;
            return 0;
        })
    }

    const start = (page -1) * limit;
    const total = result.length;
    result = result.slice(start, start + limit);

    return {page, limit, total, data: result};
  
};

export default getBooks;