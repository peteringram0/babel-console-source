/**
 * Prepend file name and number as part of the babel process
 *
 * @author Peter Ingram
 */

exports.default = () => {
    return {
        visitor: {
            CallExpression(path, state) {

                if (path.node.callee.object && path.node.callee.object.name === 'console') {

                    let file = state.file.opts.filename.split("/");
                    file = file[file.length - 1];

                    path.node.arguments.unshift({
                        type: 'StringLiteral',
                        value: `${file} (${path.node.loc.start.line}:${path.node.loc.start.column})`
                    });

                }

            }
        }
    };
};