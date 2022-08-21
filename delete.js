${engineer.getRole()}

${engineer.getName()}

${engineer.getId()}

${engineer.getEmail()}

${engineer.getGithub()}



${manager.getRole()}

${manager.getName()}

${manager.getId()}

${manager.getEmail()}

${manager.getOfficeNumber()}



${intern.getRole()}

${intern.getName()}

${intern.getId()}

${intern.getEmail()}

${intern.getSchool()}


${managerEmp.map((info) => managerMarkup(info))}

${engineerEmp.map((info) => engineerMarkup(info))}

${internEmp.map((info) => internMarkup(info))}