#skillsgap 
#Extract skills from both resume and dream job
#assume that resume_skill and dream_job_skill both are list of strings
tech_skills_mastery = {
    "Python Programming": 400,
    "JavaScript": 500,
    "HTML/CSS": 200,
    "React.js": 300,
    "Node.js": 350,
    "Data Structures and Algorithms": 600,
    "Database Management (SQL)": 300,
    "Machine Learning": 800,
    "Artificial Intelligence": 1000,
    "Cloud Computing (AWS)": 700,
    "DevOps": 600,
    "Docker": 200,
    "Kubernetes": 400,
    "Cybersecurity": 700,
    "Blockchain": 800,
    "Mobile Development (iOS/Android)": 700,
    "UI/UX Design": 400,
    "Software Testing": 250,
    "Agile Methodology": 150,
    "Data Analysis": 400,
    "Big Data Technologies (Hadoop/Spark)": 600,
    "Natural Language Processing": 700,
    "API Development": 300,
    "Version Control (Git)": 150,
    "System Design": 500,
    "Networking Fundamentals": 400,
    "Linux Administration": 500}

tech_jobs_skills = {
    "Frontend Developer": ["HTML/CSS", "Version Control (Git)", "JavaScript", "React.js", "UI/UX Design"],
    "Backend Developer": ["Version Control (Git)", "Database Management (SQL)", "API Development", "Node.js", "System Design"],
    "Fullstack Developer": ["HTML/CSS", "Version Control (Git)", "JavaScript", "Node.js", "React.js", "Database Management (SQL)", "System Design"],
    "Data Scientist": ["Version Control (Git)", "Data Analysis", "Machine Learning", "Data Structures and Algorithms", "Natural Language Processing"],
    "DevOps Engineer": ["Version Control (Git)", "Linux Administration", "Docker", "Kubernetes", "Cloud Computing (AWS)", "DevOps"],
    "Mobile Developer": ["HTML/CSS", "Version Control (Git)", "JavaScript", "React.js", "Mobile Development (iOS/Android)"],
    "Cybersecurity Specialist": ["Networking Fundamentals", "Version Control (Git)", "Linux Administration", "Cybersecurity", "Cloud Computing (AWS)"],
    "AI Engineer": ["Version Control (Git)", "Data Analysis", "Machine Learning", "Artificial Intelligence", "Natural Language Processing"],
    "Blockchain Developer": ["Version Control (Git)", "Database Management (SQL)", "Data Structures and Algorithms", "Blockchain", "Cryptography"],
    "Cloud Engineer": ["Version Control (Git)", "Networking Fundamentals", "Linux Administration", "Cloud Computing (AWS)", "DevOps"],
    "UI/UX Designer": ["HTML/CSS", "JavaScript", "React.js", "UI/UX Design", "Agile Methodology"],
    "Software Tester": ["Version Control (Git)", "HTML/CSS", "Software Testing", "API Development", "DevOps"],
    "System Administrator": ["Version Control (Git)", "Linux Administration", "Networking Fundamentals", "System Design", "Cloud Computing (AWS)"]
}

class Skillsgap():
    resume_skills=[]
    dream_job_skills=[]
    missing_skills=[]
    time_needed=0 #in hours
    plan = {}
    hours_perday=0
    hardness=""

    def __init__(self, resume_skills, dream_job, years_expected=None): 
        self.resume_skills= resume_skills
        self.dream_job_skills= tech_jobs_skills[dream_job]     
        self.years_expected = years_expected

# Identify the skill gap
    def gapcalculations(self):
        for i in self.dream_job_skills:
            if i not in self.resume_skills:
                self.missing_skills.append(i)


    def calculate_time_needed(self):
        t=0
        for i in self.missing_skills:
            t+= tech_skills_mastery[i]
        self.time_needed=t

    
    # Generate improvement plan based on the missing skills
    def generate_improvement_plan(self):
        for skill in self.missing_skills:
            self.plan[skill] = tech_skills_mastery[skill]
        if self.hours_perday!=0:
            print(self.hardness)
            print("You will need to spend")
            print(self.hours_perday)
            print("hours per day in order to get ready for the job.")
        print (self.plan)
            
    def consider_time_left(self, time_left):
        if time_left > self.time_needed:
            return self.plan
        else :
            newskillsneeded =self.missing_skills
            while time_left < self.time_needed:
                self.time_needed -= tech_skills_mastery[newskillsneeded[0]]
                newskillsneeded.remove(newskillsneeded[0])
            self.missing_skills = newskillsneeded
        
    #timeDATA
    #AIrearranger

    def Hours_spent_perday(self):
        self.hours_perday= self.time_needed/(self.years_expected * 365)

    def Gethardness(self):
        if self.hours_perday <= 1:
            self.hardness="easy"
        elif self.hours_perday <= 4:
            self.hardness="medium"
        elif self.hours_perday <=8:
            self.hardness="chanllenging"
        else:
            self.hardness="very hard"
    #AIplanar

    def getResult(self, time_left=None):
        self.gapcalculations()
        self.calculate_time_needed()
        if time_left is not None:
            self.consider_time_left(time_left)
        if self.years_expected is not None:
            self.Hours_spent_perday()
            self.Gethardness()
        self.generate_improvement_plan()
        
Traveller= Skillsgap(["Agile Methodology","JavaScript","Python Programming"],"Fullstack Developer",1.5)
Traveller.getResult(1500)