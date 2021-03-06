const TypeOfGenerator = {
    "text/xml": "XmlGenerator",
    "application/json": "JsonGenerator",
    "email": "EmailGenerator"
}

const DeleteBodyTypeGenerator = {
    "text/xml": "_xml_generator",
    "application/json": "_json", 
}

module.exports = {
    TypeOfGenerator: TypeOfGenerator,
    DeleteBodyTypeGenerator: DeleteBodyTypeGenerator
}