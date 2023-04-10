export default {
    name:"Git Bulk",
    version:"1.0.0",
    description:"Clone multiple repositories from git",

    commands:{
        clone:{
            command:"clone",
            description:"Clone repositories",
            argument:["<username>", "User profile to clone from"],
            options:{
                provider:["-P, --provider <char>","Provider where cloning from, Github is default value","github"]
            }
        }
    }
}