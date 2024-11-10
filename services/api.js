import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://eftcaqtfmaxoygwxcyhs.supabase.co/rest/v1/',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmdGNhcXRmbWF4b3lnd3hjeWhzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMTI2MzQ0OSwiZXhwIjoyMDQ2ODM5NDQ5fQ.HVYc29zIk5i4_7xQQhoH7T2TKP-EZtk85DR6Lc6fS2M",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVmdGNhcXRmbWF4b3lnd3hjeWhzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMTI2MzQ0OSwiZXhwIjoyMDQ2ODM5NDQ5fQ.HVYc29zIk5i4_7xQQhoH7T2TKP-EZtk85DR6Lc6fS2M"
    }
})
