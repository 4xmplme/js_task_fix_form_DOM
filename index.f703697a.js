document.querySelectorAll("form input").forEach(function(e){var l,t=document.createElement("label"),a=(l=e.name.replace(/([A-Z])/g," $1").trim())[0].toUpperCase()+l.slice(1);t.className="field-label",t.htmlFor=e.id,t.textContent=a,e.placeholder=a,e.parentElement.append(t)});
//# sourceMappingURL=index.f703697a.js.map
