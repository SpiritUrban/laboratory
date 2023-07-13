const graphql = require('graphql');
const User = require('../models/User'); // Моделі mongoose, які ми ще створимо
const Post = require('../models/Post');

const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull
} = graphql;

// Оприділити типи даних
const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        posts: {
            type: new GraphQLList(PostType),
            resolve(parent, args) {
                return Post.find({ userId: parent.id });
            }
        }
    })
});

const PostType = new GraphQLObjectType({
    name: 'Post',
    fields: () => ({
        id: { type: GraphQLID },
        title: { type: GraphQLString },
        content: { type: GraphQLString },
        user: {
            type: UserType,
            resolve(parent, args) {
                return User.findById(parent.userId);
            }
        }
    })
});

// Определить корневые запросы
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return User.findById(args.id);
            }
        },
        post: {
            type: PostType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Post.findById(args.id);
            }
        },
        // users: {
        //   type: new GraphQLList(UserType),
        //   resolve(parent, args) {
        //     return User.find({});
        //   }
        // },
        users: {
            type: new GraphQLList(UserType),
            args: {
                name: { type: GraphQLString },
                email: { type: GraphQLString }
            }, // Додаємо аргумент "name"
            resolve(parent, args) {
                if (args.name || args.email) {
                    let query = {};
                    if (args.name) {
                        query.name = { $regex: args.name, $options: 'i' };
                    }
                    if (args.email) {
                        query.email = { $regex: args.email, $options: 'i' };
                    }
                    return User.find(query);
                } else {
                    return User.find({});
                }
            }
        },


        posts: {
            type: new GraphQLList(PostType),
            resolve(parent, args) {
                return Post.find({});
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addUser: {
            type: UserType,
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                email: { type: new GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, args) {
                let user = new User({
                    name: args.name,
                    email: args.email
                });
                return user.save();
            }
        }
    }
});


module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
