using IdentityServer3.Core.Models;
using System.Collections.Generic;

namespace EmbeddedMvc.IdentityServer
{
    public static class Clients
    {
        public static IEnumerable<Client> Get()
        {
            return new[]
            {
                new Client 
                {
                    ClientName = "MVC Client",
                    ClientId = "mvc",
                    Flow = Flows.Implicit,

                    RedirectUris = new List<string>
                    {
                        "https://localhost:44319/"
                    },
                    PostLogoutRedirectUris = new List<string>
                    {
                        "https://localhost:44319/"
                    },
                    AllowedScopes = new List<string>
                    {
                        "openid",
                        "profile",
                        "roles",
                        "sampleApi"
                    }
                },
                new Client
                {
                    ClientName = "MVC Client (service communication)",   
                    ClientId = "mvc_service",
                    Flow = Flows.ClientCredentials,

                    ClientSecrets = new List<Secret>
                    {
                        new Secret("secret".Sha256())
                    },
                    AllowedScopes = new List<string>
                    {
                        "sampleApi"
                    }
                },
                   new Client
                {
                    //Resource Owner Flow Client (our web UI)
                    ClientName = "WebUI",
                    Enabled = true,

                    ClientId = "IdentityWebUI",
                  //  ClientSecret = "secret",

                    Flow = Flows.ResourceOwner,                    
                    AccessTokenType = AccessTokenType.Jwt,
                    AccessTokenLifetime = 3600
                   
                },
                new Client
                {
                    ClientName = "Resource Explorer",
                    Enabled = true,

                    ClientId = "ResourceExplorer",
                 //   ClientSecret = "secret",
                    Flow = Flows.Implicit,
                    
                    ClientUri = "http://www.resExplorer.com",
                
                    RequireConsent = true,
                    AllowRememberConsent = true,
                    
                    RedirectUris = new List<string>
                    {
                        "http://localhost:10071/",
                    },

                    PostLogoutRedirectUris = new List<string>
                    {
                        "http://localhost:10071/",
                    },
                    
                    IdentityTokenLifetime = 360,
                    AccessTokenLifetime = 3600
                }
            };
        }
    }
}