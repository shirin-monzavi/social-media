export const postStatus = ['Draft', 'Publish', 'Archive'];
export const postCategoreis = ['Education', 'New ', 'Others'];
export default 'Social Media app';
export { categories, getCategory, statuses,getStatus };
/**
 * Categories
 */
const categories = [
    {
        id: 'edu',
        title: 'Education'
    },
    {
        id: 'ent',
        title: 'Entertaiment'
    },
    {
        id: 'gam',
        title: 'Game'
    },
    {
        id: 'nws',
        title: 'News'
    },
    {
        id: 'oth',
        title: 'Other'
    }
]
/**
 * 
 * @param {string} id 
 * @returns 
 * The category text.
 */
const getCategory = (id) => {
    const item = categories.find((c) => {
        return c.id === id
    })
    return item?.title || 'None'
}


/**
 * Retruns list of status
 */
const statuses =
    [
        { id: 'd', text: 'Draft' },
        { id: 'p', text: 'Published' },
        { id: 'a', text: 'Archived' },
    ];

/**
 * This a method that returns text of status
 * @param {id} string 
 * @returns 
 * Text of status
 */
const getStatus = (id) => {

    const item = statuses.find((s) => {
        return s.id === id;
    })

    return item?.text || 'None Set'
}