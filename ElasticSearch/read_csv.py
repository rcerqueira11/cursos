import csv
import re

def insert_into_file(f1,data):
    print >>f1,data

def group_dict(x):
    return {
        'Fin Tech': 1,
        'Fin Services': 2,
        'FinTech Venture': 3,
        'Support': 4,
        'Service Provider': 5,
        'Financial Institution': 6,
        '': ""
    }[x]

def capabi_dict(x):
    return{
    'inhouse':1,
    'not technically inclined. have online application process.':2,
    'services':3,
    'partner':4,

    }[x]

part_id = 0

with open('f3.csv') as csvfile:
    reader = csv.DictReader(csvfile)
    f1=open('./f2.sql','w+')
    # f1=open('./f2.sql','w+')
    arr_gr= []
    arr_cap= []
    for index,row in enumerate(reader):
        id_company = index+1
        name = row['Company'].strip() if row['Company'] else "" 
        description = row['Description'].replace("'","") if row['Description'] else "" 
        phone = row['Phone'] if row['Phone']   else ""   
        email =  row['Email'] if row['Email'] else "" 
        website =  row['Website'] if row['Website'] else "" 
        twitter = row['Twitter'] if row['Twitter'] else "" 
        linkedin = row['LinkedIn'] if row['LinkedIn'] else "" 
        # print >>f1, , row['Location'], , , row['Capabilities'], row['Key Features']


        # company_query = "INSERT INTO public.company(id,name, description, phone, email, website, twitter, linkedin, logo, owner_id, location_id) "+ \
        ############# COMPANIES ###############
        company_query = "INSERT INTO public.company(id, name, description, phone, email, website, twitter, linkedin) "+ \
        "VALUES ( "+str(id_company)+",'" + name+ "', '"+description+"', '"+phone+"', '"+email+"', '"+website+"', '"+twitter+"', '"+linkedin+"');"
        # insert_into_file(f1,company_query)    
        ############# COMPANIES ###############


        ############# CATEGORIES ###############
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
        # print arr_categories
        for cindex,val in enumerate(arr_categories):
            id_category = cindex + 1
            if val=='v':
                category_query = "INSERT INTO public.company_category(category_id, company_id) VALUES ("+str(id_category)+","+str(id_company)+");"
                # insert_into_file(f1, category_query)
        ############# CATEGORIES ###############

        ############# BUSSINES MODEL ###############

        # 1 'B2B' 
        # 2 'B2C'
        business_model = row['Business Model'].replace(' ','').split(',')
        # if len(business_model) > 1:
            # print(business_model)
        for index,model in enumerate(business_model):
            id_bmodel = ''
            if model == "B2B":
                id_bmodel = 1
            if model == "B2C":
                id_bmodel = 2

            if not id_bmodel == '':
                business_model_query = "INSERT INTO public.company_businessmodel(business_model_id, company_id) VALUES ("+str(id_bmodel)+","+str(id_company)+");"
                # insert_into_file(f1, business_model_query)
        ############# BUSSINES MODEL ###############

        ############# GROUPS ###############

        # "1";"Financial Technology"
        # "2";"Financial Services"
        # "3";"Financial Technology Ventures"
        # "4";"Support"
        # "5";"Service Providers"
        # "6";"Financial Institutions"


        arr_gr.append(row['Group'].strip())
        group_data = row['Group'].strip().split("/")
        for group in group_data:
            id_group = group_dict(group)
            if not id_group == "":
                group_model_query = "INSERT INTO public.company_group(group_id, company_id) VALUES ("+str(id_group)+","+str(id_company)+");"
                # insert_into_file(f1, group_model_query)
                
        ############# GROUPS ###############


        ############# CAPABILITIES ###############

        # "1";"In house"
        # "2";"Not technically inclined. Have online application process."
        # "3";"Services"
        # "4";"Partners with"



        
        cap = row['Capabilities'].strip().lower().replace('\xc2\xa0','')
        in_house = 'inhouse' in cap or 'in house' in cap
        in_part = 'partner' in cap
        in_servi = 'services' in cap
        in_not_tech = 'not technically inclined. have online application process.' in cap

        if in_part:
            id_capability = capabi_dict('partner')
            partners = cap.replace(')','').replace('.','').split('with')
            partners2 = partners[1].split('and')
            for partner in partners2:
                part_id = part_id + 1
                if 'sei' in partner:
                    partner = 'SEI'
                partner = partner.upper()
                partner_query = "INSERT INTO public.partner(id, name) VALUES ("+str(part_id)+",'"+partner+"');"
                # insert_into_file(f1,partner_query)
                partner_company_query = "INSERT INTO public.company_partner(partner_id, company_id) VALUES ("+str(part_id)+","+ str(id_company)+");"
                # insert_into_file(f1,partner_company_query)
        

                capability_query = "INSERT INTO public.company_capabilities(capability_id, company_id) VALUES ("+str(id_capability)+","+str(id_company)+");"
                # insert_into_file(f1,capability_query)

        if in_house:
            id_capability = capabi_dict('inhouse')
            capability_query = "INSERT INTO public.company_capabilities(capability_id, company_id) VALUES ("+str(id_capability)+","+str(id_company)+");"
            insert_into_file(f1,capability_query)

        if in_servi:
            id_capability = capabi_dict('services')
            capability_query = "INSERT INTO public.company_capabilities(capability_id, company_id) VALUES ("+str(id_capability)+","+str(id_company)+");"
            insert_into_file(f1,capability_query)
            
        if in_not_tech:
            id_capability = capabi_dict('not technically inclined. have online application process.')
            capability_query = "INSERT INTO public.company_capabilities(capability_id, company_id) VALUES ("+str(id_capability)+","+str(id_company)+");"
            insert_into_file(f1,capability_query)
            



        ############# CAPABILITIES ###############
    # asd = set(arr_cap)
    # print(asd)
    # for i in asd:
    #     qwe = i.split("/")
    #     for j in qwe:
    #         print(group_dict(j))