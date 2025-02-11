import tkinter as tk
from tkinter import filedialog, messagebox, ttk
import json

class JSONEditor:
    def __init__(self, root):
        self.root = root
        self.root.title("JSON Editor")
        
        self.json_data = []
        self.selected_index = None
        
        self.load_button = tk.Button(root, text="Load JSON", command=self.load_json)
        self.load_button.pack()
        
        self.listbox = tk.Listbox(root, height=10)
        self.listbox.pack(fill=tk.BOTH, expand=True)
        self.listbox.bind("<<ListboxSelect>>", self.on_select)
        
        self.edit_frame = tk.Frame(root)
        self.edit_frame.pack(fill=tk.BOTH, expand=True)
        
        tk.Label(self.edit_frame, text="ID:").grid(row=0, column=0)
        self.id_entry = tk.Entry(self.edit_frame)
        self.id_entry.grid(row=0, column=1)
        
        tk.Label(self.edit_frame, text="Platform:").grid(row=1, column=0)
        self.platform_entry = tk.Entry(self.edit_frame)
        self.platform_entry.grid(row=1, column=1)
        
        tk.Label(self.edit_frame, text="Parcours:").grid(row=2, column=0)
        self.parcours_entry = tk.Entry(self.edit_frame)
        self.parcours_entry.grid(row=2, column=1)
        
        tk.Label(self.edit_frame, text="Title:").grid(row=3, column=0)
        self.title_entry = tk.Entry(self.edit_frame)
        self.title_entry.grid(row=3, column=1)
        
        tk.Label(self.edit_frame, text="Description:").grid(row=4, column=0)
        self.description_entry = tk.Entry(self.edit_frame)
        self.description_entry.grid(row=4, column=1)
        
        tk.Label(self.edit_frame, text="Image:").grid(row=5, column=0)
        self.image_entry = tk.Entry(self.edit_frame)
        self.image_entry.grid(row=5, column=1)
        
        tk.Label(self.edit_frame, text="Tags:").grid(row=6, column=0)
        self.tags_entry = tk.Entry(self.edit_frame)
        self.tags_entry.grid(row=6, column=1)
        
        tk.Label(self.edit_frame, text="Links:").grid(row=7, column=0)
        self.links_entry = tk.Entry(self.edit_frame)
        self.links_entry.grid(row=7, column=1)
        
        self.save_button = tk.Button(root, text="Save Changes", command=self.save_changes)
        self.save_button.pack()
        
        self.save_json_button = tk.Button(root, text="Save JSON", command=self.save_json)
        self.save_json_button.pack()
    
    def load_json(self):
        file_path = filedialog.askopenfilename(filetypes=[("JSON files", "*.json")])
        if file_path:
            with open(file_path, "r", encoding="utf-8") as file:
                self.json_data = json.load(file)
            self.update_listbox()
    
    def update_listbox(self):
        self.listbox.delete(0, tk.END)
        for item in self.json_data:
            self.listbox.insert(tk.END, item["title"])
    
    def on_select(self, event):
        try:
            index = self.listbox.curselection()[0]
            self.selected_index = index
            item = self.json_data[index]
            self.id_entry.delete(0, tk.END)
            self.id_entry.insert(0, item["id"])
            self.platform_entry.delete(0, tk.END)
            self.platform_entry.insert(0, item["platform"])
            self.parcours_entry.delete(0, tk.END)
            self.parcours_entry.insert(0, item["parcours"])
            self.title_entry.delete(0, tk.END)
            self.title_entry.insert(0, item["title"])
            self.description_entry.delete(0, tk.END)
            self.description_entry.insert(0, item["description"])
            self.image_entry.delete(0, tk.END)
            self.image_entry.insert(0, item["image"])
            self.tags_entry.delete(0, tk.END)
            self.tags_entry.insert(0, ", ".join(item["tags"]))
            self.links_entry.delete(0, tk.END)
            self.links_entry.insert(0, ", ".join([f'{link["name"]}: {link["href"]}' for link in item["links"]]))
        except IndexError:
            pass
    
    def save_changes(self):
        if self.selected_index is not None:
            self.json_data[self.selected_index]["id"] = self.id_entry.get()
            self.json_data[self.selected_index]["platform"] = self.platform_entry.get()
            self.json_data[self.selected_index]["parcours"] = self.parcours_entry.get()
            self.json_data[self.selected_index]["title"] = self.title_entry.get()
            self.json_data[self.selected_index]["description"] = self.description_entry.get()
            self.json_data[self.selected_index]["image"] = self.image_entry.get()
            self.json_data[self.selected_index]["tags"] = self.tags_entry.get().split(", ")
            self.json_data[self.selected_index]["links"] = [
                {"name": link.split(": ")[0], "href": link.split(": ")[1]} for link in self.links_entry.get().split(", ") if ": " in link
            ]
            self.update_listbox()
            messagebox.showinfo("Success", "Changes saved successfully!")
    
    def save_json(self):
        file_path = filedialog.asksaveasfilename(defaultextension=".json", filetypes=[("JSON files", "*.json")])
        if file_path:
            with open(file_path, "w", encoding="utf-8") as file:
                json.dump(self.json_data, file, indent=2, ensure_ascii=False)
            messagebox.showinfo("Success", "JSON saved successfully!")

if __name__ == "__main__":
    root = tk.Tk()
    app = JSONEditor(root)
    root.mainloop()
