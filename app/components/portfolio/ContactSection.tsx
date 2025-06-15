import React from 'react';

interface ContactInfo {
  id: string;
  type: 'email' | 'phone' | 'location' | 'website' | 'social';
  value: string;
  label?: string;
  icon?: string;
}

interface ContactSectionProps {
  contactInfo?: ContactInfo[];
}

export function ContactSection({ contactInfo = [] }: ContactSectionProps) {
  return (
    <div className="bg-card border border-border rounded-lg p-6 mb-4">
      <h2 className="text-2xl font-bold mb-4">Contact</h2>
      
      {contactInfo.length === 0 ? (
        <p className="text-muted-foreground">No contact information added yet. Add your contact details to make it easy for people to reach you.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contactInfo.map((contact) => (
            <div key={contact.id} className="flex items-start">
              <div className="mr-3 mt-1">
                {contact.icon ? (
                  <img src={contact.icon} alt={contact.type} className="w-5 h-5" />
                ) : (
                  <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-xs text-primary">
                      {contact.type === 'email' && '@'}
                      {contact.type === 'phone' && '📱'}
                      {contact.type === 'location' && '📍'}
                      {contact.type === 'website' && '🌐'}
                      {contact.type === 'social' && '🔗'}
                    </span>
                  </div>
                )}
              </div>
              <div>
                <h3 className="font-medium">{contact.label || contact.type}</h3>
                {contact.type === 'email' ? (
                  <a href={`mailto:${contact.value}`} className="text-primary hover:underline">
                    {contact.value}
                  </a>
                ) : contact.type === 'website' || contact.type === 'social' ? (
                  <a 
                    href={contact.value.startsWith('http') ? contact.value : `https://${contact.value}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    {contact.value}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{contact.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 