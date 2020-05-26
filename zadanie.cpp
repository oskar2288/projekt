#include <iostream>
#include <fstream>
#include <sstream>
#include <string>


		using namespace std;

	string napisy;

        class zamiana{
			
			ifstream plik1;
		ofstream plik2;

	
	public:
			zamiana();
			~zamiana();
       
       
};

                   
	bool palindrome(string s)
{
        int back = s.length()-1; 
        bool palindrome = true; 
        for (int i=0; i<s.length()/2 && palindrome; i++) 
                if (s[i] != s[back--]) 
                        palindrome = false;
                       
        
		return palindrome;
}

	
	zamiana::zamiana(){ 
			plik1.open("aa.txt");
			plik2.open("bb.txt");
     
	 if(plik1.good())  
		 
            while(!plik1.eof())  
                  {
                   getline(plik1,napisy);  
					string s(napisy), slowo, polacz("");
                    stringstream ss(s);
							while(ss >> slowo) 
                    polacz += slowo;
							if(palindrome(napisy)==1)
                    { 
                    cout<<"["<<endl<<"{"<<endl<<"string"<<":"<<napisy<<endl<<""<<"palindrom"<<":tak"<<endl<<"}"<<""<<endl;
                    plik2<<"["<<endl<<"{"<<endl<<"string"<<":"<<napisy<<endl<<""<<"palindrom"<<":tak"<<endl<<"}"<<""<<endl;
                    }
						else
						{
                    cout<<"["<<endl<<"{"<<endl<<"string"<<":"<<napisy<<endl<<""<<"palindrom"<<":nie"<<endl<<"}"<<""<<endl;
                    plik2<<"["<<endl<<"{"<<endl<<"string"<<":"<<napisy<<endl<<""<<"palindrom"<<":nie"<<endl<<"}"<<""<<endl;
						 }
					}
   
}

	zamiana::~zamiana(){ 
		
		plik1.close();
			plik2.close();
}

			int main() {
	
		
		zamiana palindrom;
    
	return 0;
}
