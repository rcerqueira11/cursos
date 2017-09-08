


















SELECT b.name FROM company a, business_model b, company_businessmodel c
WHERE c.business_model_id=b.id and c.company_id=a.id;




SELECT a.name b.name FROM company a,business_model b, company_businessmodel c,
WHERE c.business_model_id=b.id and c.company_id=a.id;