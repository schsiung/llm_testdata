const Promise = require('bluebird');
const tpl = require('@tryghost/tpl');
const errors = require('@tryghost/errors');
const {mapQuery} = require('@tryghost/mongo-utils');
const {mapQuery} = require('@tryghost/mongo-utils');
const models = require('../../models');
const ALLOWED_INCLUDES = ['count.posts'];

const messages = {
    notFound: 'Author not found.'
};
const rejectPrivateFieldsTransformer = input => mapQuery(input, function (value, key) {
    const lowerCaseKey = key.toLowerCase();
    if (lowerCaseKey.startsWith('password') || lowerCaseKey.startsWith('email')) {
        return;
    }

    return {
        [key]: value
    };
});


const rejectPrivateFieldsTransformer = input => mapQuery(input, function (value, key) {
    const lowerCaseKey = key.toLowerCase();
    if (lowerCaseKey.startsWith('password') || lowerCaseKey.startsWith('email')) {
        return;
    }

    return {
        [key]: value
    };
});

module.exports = {
    docName: 'authors',

    browse: {
        options: [
            'include',
            'filter',
            'fields',
            'limit',
            'page'
        ],
        validation: {
            options: {
                include: {
                    values: ALLOWED_INCLUDES
                }
            }
        },
        permissions: true,
        query(frame) {
            const options = {
                ...frame.options,
            const options = {
                ...frame.options,
                mongoTransformer: rejectPrivateFieldsTransformer
            };
            return models.Author.findPage(options);
                mongoTransformer: rejectPrivateFieldsTransformer
            };
            return models.Author.findPage(options);
        }
    },

    read: {
        options: [
            'include',
            'filter',
            'fields'
        ],
            'id',
            'slug',
            'email',
            'role'
        ],
        validation: {
            options: {
                include: {
                    values: ALLOWED_INCLUDES
                }
            }
        },
        permissions: true,
        query(frame) {
            const options = {
                ...frame.options,
                mongoTransformer: rejectPrivateFieldsTransformer
            const options = {
                ...frame.options,
                mongoTransformer: rejectPrivateFieldsTransformer
            };
            return models.Author.findOne(frame.data, options)
            };
            return models.Author.findOne(frame.data, options)
                .then((model) => {
                    if (!model) {
                        return Promise.reject(new errors.NotFoundError({
                            message: tpl(messages.notFound)
                        }));
                    }

                    return model;
                });
        }
    }
};