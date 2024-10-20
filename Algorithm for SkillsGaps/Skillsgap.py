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
    "Linux Administration": 500,
    "Web Development": 250,
    "Ruby on Rails": 300,
    "PHP": 350,
    "C++ Programming": 600,
    "Java Programming": 500,
    "Scala": 600,
    "Go Programming": 500,
    "Rust Programming": 550,
    "TensorFlow": 700,
    "Computer Vision": 800,
    "Power BI": 400,
    "Salesforce Administration": 300,
    "SAP": 600,
    "Oracle Database": 400,
    "R Programming": 500,
    "MATLAB": 500,
    "Game Development (Unity/Unreal)": 700,
    "3D Modeling (Blender/Maya)": 600,
    "Augmented Reality (AR)": 800,
    "Virtual Reality (VR)": 800,
    "Internet of Things (IoT)": 700,
    "Edge Computing": 700,
    "Quantum Computing": 1000,
    "Embedded Systems": 600,
    "Robotics": 900,
    "Penetration Testing": 650,
    "Cloud Computing (Azure)": 700,
    "Cloud Computing (Google Cloud)": 700,
    "Microservices Architecture": 500,
    "Serverless Computing": 400,
    "GraphQL": 300,
    "NoSQL Databases (MongoDB/Cassandra)": 400,
    "ETL (Extract, Transform, Load)": 350,
    "DevSecOps": 600,
    "SaaS Development": 500,
    "IT Automation (Ansible/Puppet)": 400,
    "API Gateway Management": 350,
    "Enterprise Architecture": 700,
    "Data Engineering": 600,
    "Data Governance": 400,
    "Predictive Analytics": 700,
    "Deep Learning": 900,
    "Reinforcement Learning": 850,
    "Computer Graphics": 600,
    "Distributed Systems": 800,
    "Low-Code/No-Code Development": 200,
    "Bioinformatics": 900,
    "Geospatial Analysis (GIS)": 600,
    "Cloud Security": 700,
    "Mobile Security": 600,
    "Hardware Security": 700,
    "Firmware Development": 550,
    "Virtualization (VMware)": 400,
    "Automated Testing": 300,
    "Game AI Development": 800,
    "Speech Recognition": 800,
    "Wearable Technology": 600,
    "Bioengineering": 850,
    "Microcontroller Programming (Arduino)": 300,
    "FPGA Programming": 700,
    "Digital Signal Processing (DSP)": 750,
    "Natural User Interfaces (NUI)": 600,
    "Mobile App Security": 600,
    "5G Networks": 700,
    "Smart Grids": 750,
    "Automotive Software Engineering": 800,
    "Energy Management Systems": 600,
    "Human-Computer Interaction": 400,
    "E-Commerce Development": 500,
    "Supply Chain Technology": 600,
    "Fintech": 700,
    "Healthcare IT": 650,
    "Quantum Machine Learning": 1000
}

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
    "System Administrator": ["Version Control (Git)", "Linux Administration", "Networking Fundamentals", "System Design", "Cloud Computing (AWS)"],
    "Software Engineer": ["HTML/CSS", "API Development","Version Control (Git)","Java Programming","Python Programming","Data Structures and Algorithms", "System Design","DevOps","Database Management (SQL)", "Cloud Computing (AWS)","Microservices Architecture","Agile Methodology"],
    "Data Scientist": [
        "Version Control (Git)",
        "Python Programming", 
        "Data Analysis", 
        "Data Engineering",
        "Data Governance",
        "Machine Learning", 
        "Big Data Technologies (Hadoop/Spark)",
        "Natural Language Processing",
        "Predictive Analytics",
        "Artificial Intelligence",
        "Deep Learning",
        "Reinforcement Learning",
        "Quantum Machine Learning"
    ],
    "DevOps Engineer": [
        "Version Control (Git)",
        "Linux Administration",
        "Docker",
        "Kubernetes",
        "Cloud Computing (AWS)",
        "Cloud Computing (Azure)",
        "Cloud Security",
        "CI/CD",
        "Infrastructure as Code (Terraform)",
        "DevSecOps",
        "Networking Fundamentals",
        "IT Automation (Ansible/Puppet)"
    ],
    "Web Developer": [
        "HTML/CSS",
        "JavaScript",
        "React.js",
        "Node.js",
        "PHP",
        "Ruby on Rails",
        "API Development",
        "Web Development",
        "Database Management (SQL)",
        "NoSQL Databases (MongoDB/Cassandra)",
        "DevOps",
        "Microservices Architecture",
        "Cloud Computing (AWS)"
    ],
    "AI/ML Engineer": [
        "Python Programming",
        "Data Structures and Algorithms",
        "Data Analysis",
        "Machine Learning",
        "Deep Learning",
        "Artificial Intelligence",
        "Natural Language Processing",
        "TensorFlow",
        "Reinforcement Learning",
        "Computer Vision",
        "Quantum Machine Learning"
    ],
    "Mobile App Developer": [
        "HTML/CSS",
        "JavaScript",
        "Mobile Development (iOS/Android)",
        "React Native",
        "API Development",
        "Version Control (Git)",
        "DevOps",
        "Mobile App Security",
        "UI/UX Design",
        "Agile Methodology",
        "Cloud Computing (AWS)"
    ],
    "Cybersecurity Specialist": [
        "Version Control (Git)",
        "Linux Administration",
        "Networking Fundamentals",
        "Cybersecurity",
        "Penetration Testing",
        "Cloud Security",
        "Mobile Security",
        "DevSecOps",
        "Hardware Security",
        "Firmware Development",
        "Blockchain",
        "Artificial Intelligence"
    ],
    "Cloud Architect": [
        "Cloud Computing (AWS)",
        "Cloud Computing (Azure)",
        "Cloud Computing (Google Cloud)",
        "Microservices Architecture",
        "DevOps",
        "Cloud Security",
        "Serverless Computing",
        "Networking Fundamentals",
        "Enterprise Architecture",
        "API Gateway Management",
        "Infrastructure as Code (Terraform)",
        "Virtualization (VMware)"
    ],
    "Blockchain Developer": [
        "Python Programming",
        "C++ Programming",
        "Rust Programming",
        "Blockchain",
        "Smart Contracts",
        "DevOps",
        "Cybersecurity",
        "Cryptography",
        "Distributed Systems",
        "Cloud Computing (AWS)"
    ],
    "Game Developer": [
        "C++ Programming",
        "Unity 3D",
        "Game AI Development",
        "3D Modeling (Blender/Maya)",
        "Physics Programming",
        "Artificial Intelligence",
        "DevOps",
        "Augmented Reality (AR)",
        "Virtual Reality (VR)",
        "Mobile Development (iOS/Android)",
        "DevOps",
        "Cloud Computing (AWS)"
    ]}

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