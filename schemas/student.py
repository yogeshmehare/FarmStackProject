
def studentEntity(item) -> dict:
    return{
        "id" : str(item['_id']),
        "sName" : str(item['name']),
        "sEmail" : str(item['email']),
        "sRollNo" : str(item['rollNo']),   
    }

def listOfStudentEntities(list_items) -> list:
    li_student_entities = []
    for item in list_items:
        li_student_entities.append(studentEntity(item))
    return li_student_entities