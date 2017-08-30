import csv

def insert_into_file(f1,data):
    print >>f1,data

with open('f3.csv') as csvfile:
    reader = csv.DictReader(csvfile)
    f1=open('./f2.sql','w+')
    for index,row in enumerate(reader):
        i = index+1
        # import pudb; pu.db
        id_company = i
        name = row['Company'] if row['Company'] else "" 
        description = row['Description'].replace("'","") if row['Description'] else "" 
        phone = row['Phone'] if row['Phone']   else ""   
        email =  row['Email'] if row['Email'] else "" 
        website =  row['Website'] if row['Website'] else "" 
        twitter = row['Twitter'] if row['Twitter'] else "" 
        linkedin = row['LinkedIn'] if row['LinkedIn'] else "" 
        # print >>f1, , row['Location'], , row['Business Model'], row['Capabilities'], row['Key Features'], row['Group'],, ,, , , row['Lending'], row['Banking and Personal Financial Management(PFM)'], row['Payments and Money transfer'], row['Cyber Currency & Blockchain'], row['Wealth & Investment Management'], row['Robo Advisor'], row['Financial Crime & Cybersecurity'], row['Capital Markets'], row['AI']


        # company_query = "INSERT INTO public.company(id,name, description, phone, email, website, twitter, linkedin, logo, owner_id, location_id) "+ \
        company_query = "INSERT INTO public.company(id,name, description, phone, email, website, twitter, linkedin) "+ \
        "VALUES ( '"+str(id_company)+"," + name+ "', '"+description+"', '"+phone+"', '"+email+"', '"+website+"', '"+twitter+"', '"+linkedin+"');"
        
        insert_into_file(f1,company_query)

        # "1";"Lending"
        # "2";"Banking and Personal Financial Management(PFM)"
        # "3";"Payments and Money transfer"
        # "4";"Cyber Currency & Blockchain"
        # "5";"Wealth & Investment Management"
        # "6";"Robo Advisor"
        # "7";"Financial Crime & Cybersecurity"
        # "8";"Capital Markets"
        # "9";"Artificial Intelligence"

        arr_categories = [row['Lending'], row['Banking and Personal Financial Management(PFM)'], row['Payments and Money transfer'], row['Cyber Currency & Blockchain'], 
                          row['Wealth & Investment Management'], row['Robo Advisor'], row['Financial Crime & Cybersecurity'], row['Capital Markets'], row['AI']]
        print arr_categories
        for cindex,val in enumerate(arr_categories):
            id_category = cindex + 1
            if val=='v':
                category_query = "INSERT INTO public.company_category(category_id, company_id) VALUES ("+str(id_category)+","+str(id_company)+");"
                insert_into_file(f1, category_query)
