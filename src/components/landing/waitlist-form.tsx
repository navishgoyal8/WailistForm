"use client";

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { waitlistSchema, type WaitlistFormData } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";

const startupStages = ["Pre-seed", "Seed", "Series A", "Series B+", "Idea Stage"];

export function WaitlistForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      name: "",
      email: "",
      startupName: "",
      startupStage: undefined,
    },
  });

  const onSubmit: SubmitHandler<WaitlistFormData> = async (data) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "You've been added to the waitlist. We'll be in touch.",
          variant: "default",
        });
        form.reset();
      } else {
        const errorResult = await response.json();
        throw new Error(errorResult.message || 'An error occurred.');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="name" className="sr-only">Full Name</Label>
                <FormControl>
                  <Input 
                    id="name" 
                    placeholder="Your Full Name" 
                    {...field} 
                    className="w-full bg-slate-700/70 border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="email" className="sr-only">Email Address</Label>
                <FormControl>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your Email Address" 
                    {...field}
                    className="w-full bg-slate-700/70 border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="startupName"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="startupName" className="sr-only">Startup Name</Label>
                <FormControl>
                  <Input 
                    id="startupName" 
                    placeholder="Your Startup's Name" 
                    {...field}
                    className="w-full bg-slate-700/70 border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="startupStage"
            render={({ field }) => (
              <FormItem>
                <Label htmlFor="startupStage" className="sr-only">Startup Stage</Label>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger 
                      id="startupStage"
                      className="w-full bg-slate-700/70 border-slate-600 rounded-lg px-4 py-3 text-white data-[placeholder]:text-slate-400 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                    >
                      <SelectValue placeholder="Select Your Startup Stage" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-slate-700 border-slate-600 text-white">
                    {startupStages.map(stage => (
                      <SelectItem key={stage} value={stage} className="hover:bg-slate-600 focus:bg-slate-600">
                        {stage}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mt-6">
          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Submitting...' : 'Join the Waitlist'}
          </Button>
        </div>
      </form>
    </Form>
  );
}
